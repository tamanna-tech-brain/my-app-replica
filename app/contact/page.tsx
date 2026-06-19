import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import { SITE } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <section className="section-border bg-[#151515] pt-[calc(var(--nav-h)+48px)] section-y">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="page-hero-title text-white">We&apos;re Here to Help</h1>
          <NotchBadge borderColor="border-[#66f7ff]" className="mt-10">
            Get In Touch
          </NotchBadge>
          <p className="mt-8 text-lg text-[#a6a6a6]">
            Reach our team at{" "}
            <a href={`mailto:${SITE.email}`} className="text-white hover:text-[#c6ff34]">
              {SITE.email}
            </a>
          </p>
          <div className="mt-10 flex justify-center">
            <SplitButton href={`mailto:${SITE.email}`} variant="purple">
              Contact Support
            </SplitButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
