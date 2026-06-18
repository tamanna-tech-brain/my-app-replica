import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden card p-12 md:p-20 text-center">
          {/* Subtle ambient glow — single accent, deeply muted */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-brand-blue rounded-full mix-blend-screen filter blur-[140px] opacity-[0.12] animate-blob"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Architecting the <br />
              <span className="text-brand-blue">
                Intelligent Age
              </span>
            </h2>
            <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              Join industry leaders driving the next wave of technology. Secure your spot before tickets sell out.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/tickets" 
                className="px-8 py-4 rounded-full btn-primary text-white font-semibold flex items-center gap-2 transition-all text-lg"
              >
                Register Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
