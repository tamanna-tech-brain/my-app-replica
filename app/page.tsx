import Hero from "@/components/home/Hero";
import AboutSummit from "@/components/home/AboutSummit";
import TicketStrip from "@/components/home/TicketStrip";
import Speakers from "@/components/home/Speakers";
import Agenda from "@/components/home/Agenda";
import Pricing from "@/components/home/Pricing";
import Sponsors from "@/components/home/Sponsors";
import EventGallery from "@/components/home/EventGallery";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSummit />
      <TicketStrip />
      <Speakers />
      <Agenda />
      <Pricing />
      <Sponsors />
      <EventGallery />
      <FAQ />
      <CTASection />
    </>
  );
}
