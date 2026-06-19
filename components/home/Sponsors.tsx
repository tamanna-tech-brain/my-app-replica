import Image from "next/image";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { SPONSOR_LOGOS } from "@/lib/site-data";

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-border bg-[#151515] section-y">
      <Container>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Official Elite Sponsor
          </h2>
          <div className="mt-8 flex justify-center">
            <SplitButton href="/sponsors" variant="purple">
              Become a Sponsor
            </SplitButton>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-white/10 md:grid-cols-4">
          {SPONSOR_LOGOS.map((src, i) => (
            <div key={i} className="sponsor-cell">
              <Image
                src={src}
                alt={`Sponsor logo ${i + 1}`}
                width={200}
                height={60}
                className="max-h-12 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
