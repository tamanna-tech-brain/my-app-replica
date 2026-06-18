import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { SPEAKERS } from "@/lib/site-data";

export default function CTASection() {
  return (
    <section id="cta" className="section-border section-y">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111] px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#8b3dff]/10 via-transparent to-[#ff1cc8]/10" />

          <div className="relative z-10 mb-8 flex justify-center">
            {SPEAKERS.slice(0, 4).map((speaker, i) => (
              <div
                key={speaker.id}
                className="relative -ml-3 h-14 w-14 overflow-hidden rounded-full border border-white/10 first:ml-0 md:h-16 md:w-16"
                style={{ zIndex: 4 - i }}
              >
                <Image src={speaker.image} alt="" fill className="object-cover grayscale" sizes="64px" />
              </div>
            ))}
          </div>

          <h2 className="relative z-10 text-3xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
            Architecting the Intelligent Age
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-xl text-lg text-[#8a8a8a]">
            Join industry leaders driving the next wave of technology.
          </p>
          <Link href="/tickets" className="btn-lime relative z-10 mt-10">
            Buy Tickets
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
