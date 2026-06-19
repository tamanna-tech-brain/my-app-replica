import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/site-data";

export default function BlogsPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-[#f5f5f5] md:text-6xl lg:text-7xl">
            AI News & <span className="gradient-text">Insights</span>
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111] transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3 text-sm">
                  <span className="font-medium text-[#d9ff3f]">{post.category}</span>
                  <span className="text-[#8a8a8a]">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#f5f5f5] transition-colors group-hover:text-[#d9ff3f]">
                  {post.title}
                </h2>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#f5f5f5]">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
