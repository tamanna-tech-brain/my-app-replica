import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { SPONSOR_NAMES } from "@/lib/site-data";

export default function Sponsors() {
  return (
    <section id="sponsors" className="section-border bg-black section-y">
      <Container>
        <div className="mb-14 text-center">
          <NotchBadge borderColor="border-[#70e1f5]" className="mb-6">
            Our Sponsors
          </NotchBadge>
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
          {SPONSOR_NAMES.map((name) => (
            <div key={name} className="sponsor-cell px-4">
              <span className="text-center text-sm font-bold uppercase tracking-[0.14em] text-white/25 transition-colors hover:text-[#8b3dff] md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
