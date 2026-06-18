import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "lime" | "purple" | "gradient";

const variants: Record<Variant, string> = {
  lime: "bg-[#c9ff37] text-black hover:shadow-[0_0_30px_rgba(201,255,55,0.35)]",
  purple: "bg-[#7c3aed] text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.35)]",
  gradient:
    "bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#3b82f6] text-white hover:opacity-95",
};

export default function SplitButton({
  href,
  children,
  variant = "lime",
  className,
  fullWidth,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center overflow-hidden rounded-full font-bold transition-all",
        variants[variant],
        fullWidth && "w-full justify-center",
        className
      )}
    >
      <span className="px-6 py-3.5 text-sm md:text-base">{children}</span>
      <span className="flex h-full items-center border-l border-dashed border-black/20 px-3 py-3.5">
        <ChevronRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
