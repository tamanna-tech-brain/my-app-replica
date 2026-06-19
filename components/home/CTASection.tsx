import Image from "next/image";
import Container from "@/components/ui/Container";
import SplitButton from "@/components/ui/SplitButton";
import { SPEAKERS } from "@/lib/site-data";

export default function CTASection() {
  return (
    <section id="cta" className="section-border bg-[#151515] section-y">
      <Container>
        <div className="cta-banner relative overflow-hidden rounded-[32px] px-8 py-14 text-center md:px-16 md:py-20">
          <div className="relative z-10 mb-8 flex justify-center">
            {SPEAKERS.slice(0, 4).map((speaker, i) => (
              <div
                key={speaker.id}
                className="relative -ml-3 h-14 w-14 overflow-hidden rounded-full border-2 border-black/20 first:ml-0 md:h-16 md:w-16"
                style={{ zIndex: 4 - i }}
              >
                <Image src={speaker.image} alt="" fill className="object-cover grayscale" sizes="64px" />
              </div>
            ))}
          </div>

          <h2 className="relative z-10 text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Architecting the Intelligent Age
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-xl text-lg text-white/80">
            Join industry leaders driving the next wave of technology.
          </p>
          <div className="relative z-10 mt-10 flex justify-center">
            <SplitButton href="/tickets" variant="lime">
              Buy Tickets
            </SplitButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
