"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SplitButton from "@/components/ui/SplitButton";
import { ASSETS } from "@/lib/framer-assets";

const LEFT_PAGES = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Agenda", href: "/agenda" },
  { name: "Sponser", href: "/sponsors" },
  { name: "Speakers", href: "/speakers" },
  { name: "Speakers Details", href: "/speakers/carlos-mendoza" },
  { name: "Tickets", href: "/tickets" },
];

const RIGHT_PAGES = [
  { name: "Blogs", href: "/blog" },
  { name: "Blog Details", href: "/blog/the-future-of-ai-starts-now" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "404", href: "/non-existent-page" },
];

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Agenda", href: "/agenda" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > lastScroll.current && y > 120);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#151515] transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className={scrolled ? "border-b border-white/10" : ""}>
        <Container className="flex h-[90px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={ASSETS.logo} alt="Config" width={120} height={28} className="h-7 w-auto" priority />
          </Link>

          <nav className="hidden items-center lg:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpenDropdown((v) => !v)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#a6a6a6] hover:text-white"
              >
                All Pages
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${openDropdown ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="glass-menu absolute left-0 top-full mt-2 w-[480px] p-8 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                      {LEFT_PAGES.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          onClick={() => setOpenDropdown(false)}
                          className="block py-2 text-sm text-[#a6a6a6] hover:text-white"
                        >
                          {page.name}
                        </Link>
                      ))}
                      {RIGHT_PAGES.map((page) => (
                        <Link
                          key={page.name}
                          href={page.href}
                          onClick={() => setOpenDropdown(false)}
                          className="block py-2 text-sm text-[#a6a6a6] hover:text-white"
                        >
                          {page.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-dot px-4 py-2 text-sm font-medium ${
                  pathname === link.href ? "text-white" : "text-[#a6a6a6] hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <SplitButton href="/tickets" variant="lime">
              Get Ticket
            </SplitButton>
          </div>

          <button
            type="button"
            className="p-2 text-[#a6a6a6] lg:hidden"
            onClick={() => setOpenMenu((v) => !v)}
            aria-label="Toggle menu"
          >
            {openMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>

        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <Container className="py-5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpenMenu(false)}
                    className="block py-3 text-[#a6a6a6]"
                  >
                    {link.name}
                  </Link>
                ))}
                <SplitButton href="/tickets" variant="lime" className="mt-4">
                  Get Ticket
                </SplitButton>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
