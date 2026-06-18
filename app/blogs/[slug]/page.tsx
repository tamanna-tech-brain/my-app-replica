import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { BLOG_CONTENT, BLOG_POSTS, getBlogPostById } from "@/lib/site-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.id }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostById(slug);
  if (!post) notFound();

  const content = BLOG_CONTENT[slug] ?? BLOG_CONTENT["the-future-of-ai-starts-now"];

  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-24">
      <Container className="max-w-3xl">
        <Link href="/blogs" className="mb-10 inline-flex items-center gap-2 text-[#8a8a8a] hover:text-[#f5f5f5]">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="mb-6 flex items-center gap-3 text-sm">
          <span className="font-medium text-[#d9ff3f]">{post.category}</span>
          <span className="text-[#8a8a8a]">{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-bold leading-tight text-[#f5f5f5] md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-[#8a8a8a]">{post.author}</p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[24px] border border-white/10">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="768px" priority />
        </div>

        <div
          className="prose prose-invert prose-lg mt-10 max-w-none prose-headings:text-[#f5f5f5] prose-p:text-[#8a8a8a]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </div>
  );
}
