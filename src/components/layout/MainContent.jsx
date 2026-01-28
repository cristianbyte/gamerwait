import Header from "../hero/Header";
import CountdownGrid from "../hero/CountdownGrid";
import StatsCard from "../hero/StatsCard";
import HeatmapSection from "../hero/HeatmapSection";

export default function MainContent({
  event = {
    category: "none",
    title: "none",
    releaseDate: "none",
    targetDate: "none",
    platforms: ["xbox", "play"],
    waiters: 123,
  },
}) {
  return (
    <div className="flex flex-col overflow-y-scroll h-screen">
      <Header />
      <div className="flex-1 flex-col flex justify-center items-center max-h-full mx-auto px-4 md:px-10 py-12">
        {/* Event Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <span className="size-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-purple-400 tracking-[0.2em] uppercase">
              {event.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 tracking-tight uppercase px-4">
            {event.title}
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Launching globally on {event.releaseDate}
          </p>
        </div>

        {/* Countdown */}
        <CountdownGrid targetDate={event.targetDate} />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-12 md:mb-16">
          <StatsCard
            icon="devices"
            label="Platforms"
            content={
              <div className="flex gap-2 mt-1 flex-wrap">
                {event.platforms.map((platform, idx) => (
                  <span key={idx}>
                    <span className="text-sm font-bold text-white">
                      {platform}
                    </span>
                    {idx < event.platforms.length - 1 && (
                      <span className="text-slate-600 mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>
            }
          />
          <StatsCard
            icon="group"
            label="Tracking Now"
            content={
              <p className="text-xl font-bold text-white tabular-nums">
                {event.waiters}
                <span className="text-sm font-normal text-slate-500 ml-1">
                  Waiters
                </span>
              </p>
            }
          />
          <StatsCard
            icon="trending_up"
            label="Hype Velocity"
            content={
              <p className="text-xl font-bold text-cyan-400">
                {event.hypeVelocity}
                <span className="text-sm font-normal text-slate-500 ml-1">
                  vs yesterday
                </span>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
