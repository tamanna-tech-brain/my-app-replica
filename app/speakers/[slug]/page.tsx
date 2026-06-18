import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { SPEAKERS, getSpeakerById } from "@/lib/site-data";

export function generateStaticParams() {
  return SPEAKERS.map((speaker) => ({ slug: speaker.id }));
}

export default async function SpeakerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const speaker = getSpeakerById(slug);
  if (!speaker) notFound();

  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-24">
      <Container className="max-w-3xl">
        <Link href="/speakers" className="mb-10 inline-flex items-center gap-2 text-[#8a8a8a] hover:text-[#f5f5f5]">
          <ArrowLeft className="h-4 w-4" />
          Back to Speakers
        </Link>

        <h1 className="text-4xl font-bold text-[#f5f5f5] md:text-5xl">{speaker.name}</h1>
        <p className="mt-2 text-xl font-medium text-[#d9ff3f]">{speaker.role}</p>

        <div className="relative mt-10 aspect-square max-w-md overflow-hidden rounded-[24px] border border-white/10">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover grayscale"
            sizes="(max-width:768px) 100vw, 400px"
            priority
          />
        </div>

        <p className="mt-10 text-lg leading-relaxed text-[#8a8a8a]">{speaker.bio}</p>
      </Container>
    </div>
  );
}
