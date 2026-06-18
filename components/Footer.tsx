import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-[#8a8a8a]">{SITE.location}</p>
            <p className="mt-4 text-sm text-[#8a8a8a]">
              Support Mail
              <br />
              <a href={`mailto:${SITE.email}`} className="text-[#d9ff3f] hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold text-[#f5f5f5]">Information</p>
            <ul className="space-y-2 text-sm text-[#8a8a8a]">
              <li><Link href="/about" className="hover:text-[#f5f5f5]">About Config</Link></li>
              <li><Link href="/tickets" className="hover:text-[#f5f5f5]">Buy Tickets</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#f5f5f5]">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-[#f5f5f5]">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-4 text-sm font-bold text-[#f5f5f5]">Subscribe & Stay Weekly Updated</p>
            <form className="flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full px-4 py-3 text-sm"
              />
              <button type="submit" className="btn-lime shrink-0 text-sm">
                Join Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[#8a8a8a] md:flex-row">
          <p>Copyright © 2026 FramerBite</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#f5f5f5]">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-[#f5f5f5]">Refund Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
