export default function StatsCard({ icon, label, content }) {
  const icons = {
    devices: (
      <svg
        className="w-6 h-6 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    group: (
      <svg
        className="w-6 h-6 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    trending_up: (
      <svg
        className="w-6 h-6 text-slate-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  };

  return (
    <div className="lg:flex-row  md:flex-col p-4 md:p-6 bg-slate-800/40 rounded-xl border border-white/5 flex items-center gap-2 md:gap-3 lg:gap-5">
      <div className="size-10 md:size-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icons[icon]}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] md:text-xs text-center font-bold text-slate-500 uppercase tracking-widest">
          {label}
        </p>
        {content}
      </div>
    </div>
  );
}
