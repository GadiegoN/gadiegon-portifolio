"use client";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <svg
        className="h-[calc(100vh-4rem)] w-full opacity-80"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradientTop)"
          opacity="0.22"
          d="
            M0,120
            C360,0 720,180 1080,60
            C1300,-10 1440,40 1440,40
            L1440,0
            L0,0
            Z
          "
        />

        <path
          fill="url(#gradientBottom)"
          opacity="0.18"
          d="
            M0,780
            C300,900 600,780 900,860
            C1200,940 1440,800 1440,800
            L1440,900
            L0,900
            Z
          "
        />

        <defs>
          <linearGradient id="gradientTop" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <linearGradient
            id="gradientBottom"
            x1="0"
            y1="900"
            x2="1440"
            y2="900"
          >
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
