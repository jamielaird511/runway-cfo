"use client";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textSize =
    size === "lg" ? "text-2xl md:text-3xl" :
    size === "sm" ? "text-base" : "text-xl";
  const gap = size === "lg" ? "gap-3" : "gap-2";
  const markW = size === "lg" ? "w-10" : size === "sm" ? "w-6" : "w-8";

  return (
    <div className={`flex items-center ${gap}`} aria-label="Runway CFO">
      {/* logomark */}
      <div
        className={`${markW} h-2 -skew-x-12 rounded-sm bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]`}
      />
      {/* wordmark */}
      <span className={`${textSize} font-extrabold tracking-widest text-white`}>
        RUNWAY <span className="text-white/80">CFO</span>
      </span>
    </div>
  );
}
