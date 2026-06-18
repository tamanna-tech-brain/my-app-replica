import { cn } from "@/lib/cn";

export default function NotchBadge({
  children,
  className,
  borderColor = "border-[#d9ff3f]",
}: {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}) {
  return (
    <span
      className={cn(
        "notch-badge inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#f5f5f5]",
        borderColor,
        className
      )}
    >
      {children}
    </span>
  );
}
