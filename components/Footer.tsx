import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";

const SOCIAL = [
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="grid border-b border-white/10 md:grid-cols-12">
          <div className="border-b border-white/10 py-12 md:col-span-4 md:border-b-0 md:border-r md:py-16">
            <p className="text-2xl font-bold leading-tight text-white md:text-3xl">{SITE.location}</p>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-sm text-[#8a8a8a]">Support Mail</p>
              <a href={`mailto:${SITE.email}`} className="mt-2 block text-lg font-medium text-white hover:text-[#d9ff3f]">
                {SITE.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wider text-[#8a8a8a]">
                {SOCIAL.map((item) => (
                  <a key={item.label} href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 py-12 md:col-span-3 md:border-b-0 md:border-r md:py-16 md:pl-10">
            <p className="mb-5 text-sm font-bold text-white">Information</p>
            <ul className="space-y-3 text-sm text-[#8a8a8a]">
              <li><Link href="/about" className="hover:text-white">About Config</Link></li>
              <li><Link href="/tickets" className="hover:text-white">Buy Tickets</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="py-12 md:col-span-5 md:py-16 md:pl-10">
            <p className="mb-5 text-sm font-bold text-white">Subscribe &amp; Stay Weekly Updated</p>
            <form className="max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-[#8a8a8a]"
              />
              <button type="submit" className="btn-purple mt-4 w-full sm:w-auto">
                Join Now
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-[#8a8a8a] md:flex-row">
          <p>Copyright © 2026 FramerBite</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
