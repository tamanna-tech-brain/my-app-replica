"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const LEFT_PAGES = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Agenda", href: "/agenda" },
  { name: "Sponser", href: "/sponser" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`border-b transition-colors ${
          scrolled ? "border-white/10 bg-[#080808]/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-[90px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b3dff] to-[#ff1cc8] text-sm font-bold">
              C
            </div>
            <span className="text-lg font-bold">Config</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setOpenDropdown((v) => !v)}
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[#8a8a8a] transition-colors hover:text-[#f5f5f5]"
              >
                All Pages
                <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="glass-menu absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 p-6 shadow-2xl"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      <div>
                        {LEFT_PAGES.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            onClick={() => setOpenDropdown(false)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[#8a8a8a] transition-colors hover:bg-white/[0.04] hover:text-[#f5f5f5]"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        {RIGHT_PAGES.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            onClick={() => setOpenDropdown(false)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[#8a8a8a] transition-colors hover:bg-white/[0.04] hover:text-[#f5f5f5]"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href ? "text-[#f5f5f5]" : "text-[#8a8a8a] hover:text-[#f5f5f5]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link href="/tickets" className="btn-lime hidden text-sm lg:inline-flex">
            Get Ticket
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 text-[#8a8a8a] lg:hidden"
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
                    className="block py-3 text-[#8a8a8a] hover:text-[#f5f5f5]"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/tickets" onClick={() => setOpenMenu(false)} className="btn-lime mt-4 w-full">
                  Get Ticket
                </Link>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
