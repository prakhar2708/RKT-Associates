import { site } from "@/lib/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";

  return (
    <span className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpg"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-md object-cover"
        aria-hidden
      />
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-navy-900"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.22em] transition-colors duration-500 ${
            isDark ? "text-white/50" : "text-navy-900/50"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
