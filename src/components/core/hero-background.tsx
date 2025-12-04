"use client";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-[calc(100vh-4rem)]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
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
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          <linearGradient
            id="gradientBottom"
            x1="0"
            y1="900"
            x2="1440"
            y2="900"
          >
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
