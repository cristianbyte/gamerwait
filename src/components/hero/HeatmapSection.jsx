export default function HeatmapSection() {
  return (
    <div className="bg-slate-800/30 border border-white/5 rounded-xl md:rounded-2xl overflow-hidden">
      <div className="p-4 md:p-6 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h3 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">
          Global Hype Heatmap
        </h3>
        <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-cyan-400/20"></span>
            Low
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-cyan-400/60"></span>
            Med
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-cyan-400"></span>
            High
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-purple-500"></span>
            Critical
          </span>
        </div>
      </div>
      <div className="relative h-75 md:h-100 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Placeholder for map */}
        <div className="relative z-10 flex flex-col items-center">
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-white/5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-[10px] md:text-xs text-slate-600 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] mt-4 text-center">
            Real-time Interest Distribution
          </p>
        </div>

        {/* Stats overlay */}
        <div className="absolute top-4 right-4 p-3 bg-slate-800/80 backdrop-blur rounded-lg border border-white/5 text-[10px] space-y-2 hidden md:block">
          <div className="flex justify-between gap-8">
            <span className="text-slate-400 uppercase tracking-widest font-bold">
              Top Region
            </span>
            <span className="text-white">EUROPE (CENTRAL)</span>
          </div>
          <div className="flex justify-between gap-8">
            <span className="text-slate-400 uppercase tracking-widest font-bold">
              Activity
            </span>
            <span className="text-cyan-400">+4.2K TPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
