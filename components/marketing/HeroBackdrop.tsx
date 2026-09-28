/**
 * Lightweight "living room" scene behind the dashboard.
 * Pure CSS gradients + inline SVG: no image download, no layout shift.
 * Entirely decorative (aria-hidden).
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
      {/* warm wall */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#F6F1E9_0%,#EFE7DB_55%,#E7DDCE_100%)]" />
      {/* window light */}
      <div className="absolute -left-10 top-0 h-full w-1/2 -skew-x-12 bg-white/55 blur-2xl" />

      {/* TV */}
      <div className="absolute right-[6%] top-[6%] w-[64%] max-w-md">
        <div className="aspect-[16/9] rounded-xl bg-[#11151f] p-[3%] shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)]">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-[linear-gradient(180deg,#F2A477_0%,#C98D9B_38%,#5E6E98_70%,#27334F_100%)]">
            <svg viewBox="0 0 160 90" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3/5 w-full">
              <path d="M0 60 30 32l18 16 22-26 26 30 20-14 44 30V90H0Z" fill="#3B4A6B" />
              <path d="M0 72 24 56l20 10 26-16 30 20 24-10 36 16V90H0Z" fill="#23304A" />
              <path d="M0 80h160v10H0Z" fill="#1A2438" />
            </svg>
          </div>
        </div>
        {/* console */}
        <div className="mx-auto mt-3 h-3 w-[92%] rounded-sm bg-[#B79C7C]" />
      </div>

      {/* plant */}
      <svg viewBox="0 0 80 120" className="absolute left-[4%] top-[8%] w-[16%] max-w-[88px] opacity-90">
        <path d="M40 118V60" stroke="#5B7A5B" strokeWidth="2" />
        <ellipse cx="26" cy="46" rx="14" ry="30" transform="rotate(-25 26 46)" fill="#7FA07B" />
        <ellipse cx="54" cy="44" rx="13" ry="28" transform="rotate(22 54 44)" fill="#6C8F69" />
        <ellipse cx="40" cy="30" rx="11" ry="28" fill="#8BAE86" />
        <path d="M28 98h24l-3 20H31Z" fill="#D9CBB6" />
      </svg>

      {/* floor / sofa hint */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-[linear-gradient(180deg,transparent,#E2D6C4)]" />
    </div>
  );
}
