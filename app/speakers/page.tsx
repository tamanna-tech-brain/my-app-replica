import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SPEAKERS } from "@/lib/site-data";

export default function SpeakersPage() {
  return (
    <div className="pt-[calc(var(--nav-h)+48px)] pb-24">
      <Container>
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-[#f5f5f5] md:text-6xl lg:text-7xl">
            Our Speakers
          </h1>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <Link
              key={speaker.id}
              href={`/speakers/${speaker.id}`}
              className="speaker-lime-bg group overflow-hidden rounded-[28px] border border-white/10"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="px-5 pb-6 pt-4">
                <h2 className="text-xl font-bold text-[#f5f5f5]">{speaker.name}</h2>
                <p className="mt-1 text-sm font-medium text-[#d9ff3f]">{speaker.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
