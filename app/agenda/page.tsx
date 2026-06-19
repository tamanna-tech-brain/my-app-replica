import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import PreRegisterSection from "@/components/PreRegisterSection";
import { AGENDA_DAYS } from "@/lib/site-data";

export default function AgendaPage() {
  return (
    <>
      <section className="section-border bg-[#151515] pt-[calc(var(--nav-h)+48px)] pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="page-hero-title text-white">Event at a Glance</h1>
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-10">
            {AGENDA_DAYS.map((day) => (
              <article
                key={day.id}
                className="rounded-[24px] border border-white/10 bg-[#0f0019] p-6 md:p-10"
              >
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a6a6a6]">
                      {day.date}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">{day.title}</h2>
                  </div>
                  <NotchBadge borderColor="border-[#7e3bed]/50" className="text-[#a6a6a6]">
                    {day.duration}
                  </NotchBadge>
                </div>

                <ul className="space-y-3 border-t border-white/10 pt-6">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#a6a6a6]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6ff34]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs text-[#a6a6a6]">
                  Duration: {day.durationLabel}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PreRegisterSection />
    </>
  );
}
