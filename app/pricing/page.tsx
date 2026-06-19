import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import Pricing from "@/components/home/Pricing";

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#151515] pt-[calc(var(--nav-h)+48px)] pb-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <NotchBadge borderColor="border-[#c6ff34]" className="mb-6">
              Tickets Pricing
            </NotchBadge>
            <h1 className="page-hero-title text-white">Choose Your Tickets</h1>
          </div>
        </Container>
      </section>
      <Pricing hideHeader />
    </>
  );
}
