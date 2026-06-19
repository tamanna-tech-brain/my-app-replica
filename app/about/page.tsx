"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import NotchBadge from "@/components/ui/NotchBadge";
import SplitButton from "@/components/ui/SplitButton";
import AboutSummit from "@/components/home/AboutSummit";
import Agenda from "@/components/home/Agenda";
import Sponsors from "@/components/home/Sponsors";
import PreRegisterSection from "@/components/PreRegisterSection";
import { ABOUT_PAGE } from "@/lib/site-data";
import { ASSETS } from "@/lib/framer-assets";

export default function AboutPage() {
  return (
    <>
      <section className="section-border bg-[#151515] pt-[calc(var(--nav-h)+48px)] pb-16 md:pb-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <NotchBadge borderColor="border-[#66f7ff]" className="mb-8">
                {ABOUT_PAGE.badge}
              </NotchBadge>
              <h1 className="page-hero-title text-white">{ABOUT_PAGE.title}</h1>

              <div className="mt-8 space-y-3 text-sm text-[#a6a6a6]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#7e3bed]" />
                  {ABOUT_PAGE.location}
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#7e3bed]" />
                  {ABOUT_PAGE.date}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#7e3bed]" />
                  {ABOUT_PAGE.time}
                </p>
              </div>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#a6a6a6] md:text-lg">
                {ABOUT_PAGE.description}
              </p>

              <ul className="mt-8 space-y-3">
                {ABOUT_PAGE.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a6a6a6]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6ff34]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <SplitButton href="/tickets" variant="purple">
                  Register Now
                </SplitButton>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src={ASSETS.about.hero}
                alt="About Config summit"
                fill
                className="object-cover object-top"
                sizes="(max-width:768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-[#7e3bed]/30 mix-blend-color" />
            </div>
          </div>
        </Container>
      </section>

      <AboutSummit />

      <section className="section-border bg-[#151515] section-y">
        <Container>
          <div className="mb-12 text-center">
            <NotchBadge borderColor="border-[#c6ff34]" className="mb-6">
              Event schedule
            </NotchBadge>
            <h2 className="text-4xl font-bold text-white md:text-5xl">{ABOUT_PAGE.scheduleTitle}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ABOUT_PAGE.teamMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-[24px] border border-white/10 bg-[#0f0019] p-6 md:p-8"
              >
                <div className="flex gap-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10">
                    <Image src={member.image} alt={member.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-sm text-[#a6a6a6]">{member.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/agenda" className="text-sm font-bold text-[#c6ff34] hover:text-white">
              View full agenda →
            </Link>
          </div>
        </Container>
      </section>

      <Agenda />
      <Sponsors />
      <PreRegisterSection />
    </>
  );
}
