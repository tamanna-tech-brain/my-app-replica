"use client";

import Link from "next/link";
import Image from "next/image";
import { ASSETS } from "@/lib/framer-assets";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site-data";
import { FaXTwitter, FaFacebook, FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const SOCIAL = [
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "Facebook", href: "#", icon: FaFacebook },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "TikTok", href: "#", icon: FaTiktok },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="bg-[#151515] pt-16 md:pt-24">
      <Container>
        {/* Main footer grid inside a bordered container */}
        <div className="footer-bordered">
          <div className="grid md:grid-cols-12">
            {/* Column 1 — Location + Email + Social */}
            <div className="border-b border-white/10 md:col-span-4 md:border-b-0 md:border-r">
              {/* Location */}
              <div className="border-b border-white/10 p-8 md:p-10">
                <p className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  {SITE.location}
                </p>
              </div>

              {/* Support Mail */}
              <div className="p-8 md:p-10">
                <p className="text-sm text-[#8a8a8a]">Support Mail</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-2 block text-lg font-medium text-white hover:text-[#d9ff3f]"
                >
                  {SITE.email}
                </a>

                {/* Social icons */}
                <div className="mt-8 flex gap-4">
                  {SOCIAL.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-white/70 transition-colors hover:text-white"
                        aria-label={item.label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Column 2 — Information */}
            <div className="border-b border-white/10 p-8 md:col-span-3 md:border-b-0 md:border-r md:p-10">
              <p className="mb-6 text-lg font-bold text-white">Information</p>
              <ul className="space-y-4 text-sm text-[#8a8a8a]">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Config
                  </Link>
                </li>
                <li>
                  <Link href="/tickets" className="hover:text-white transition-colors">
                    Buy Tickets
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-white transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 — Subscribe */}
            <div className="p-8 md:col-span-5 md:p-10">
              <p className="mb-6 text-lg font-bold text-white">
                Subscribe &amp; Stay Weekly Updated
              </p>
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
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-[#8a8a8a] md:flex-row">
          <p>Copyright © 2026 FramerBite</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
