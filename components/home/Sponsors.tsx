import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { SPONSOR_NAMES } from "@/lib/site-data";

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-border section-y">
      <Container>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#f5f5f5] md:text-5xl lg:text-6xl">
            Official Elite Sponsor
          </h2>
          <Link href="/sponsors" className="btn-lime mt-8">
            Become a Sponsor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/10 md:grid-cols-4">
          {SPONSOR_NAMES.map((name, idx) => (
            <div
              key={name}
              className={`flex h-[120px] items-center justify-center px-4 md:h-[160px] ${
                idx % 4 !== 3 ? "md:border-r md:border-white/10" : ""
              } ${idx % 2 === 0 ? "border-r border-white/10 md:border-r-0" : ""} ${
                idx < SPONSOR_NAMES.length - (SPONSOR_NAMES.length % 4 || 4)
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="text-center text-sm font-bold uppercase tracking-[0.14em] text-white/20 transition-colors hover:text-[#8b3dff] md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
