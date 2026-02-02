import Header from "../hero/Header";
import CountdownGrid from "../hero/CountdownGrid";
import StatsCard from "../hero/StatsCard";
import { useApp } from "../../context/AppContext";
import {
  getTrackingColor,
  getTrackingLabel,
  getOnlyColor,
} from "../types/TrakingType";

export default function MainContent() {
  const { selectedRelease } = useApp();

  // selectedRelease ya es el objeto completo
  if (!selectedRelease) {
    return <div>No event selected</div>;
  }

  const { startAt, endAt } = selectedRelease.tracking ?? {};
  const targetDate = endAt ?? startAt;

  return (
    <div className="flex flex-col w-full overflow-y-scroll h-screen">
      <Header />
      <div className="flex-1 flex-col gap-10 flex justify-center items-center max-h-full px-4 py-12">
        {/* Event Header */}
        <div className="text-center">
          <div
            className={`inline-flex items-center px-2 py-1  ${getTrackingColor(selectedRelease.tracking.type)} gap-2 mb-6 border w-max rounded-full`}
          >
            <span
              className={`size-2 ${getOnlyColor(selectedRelease.tracking.type)} rounded-full animate-pulse`}
            ></span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              {getTrackingLabel(selectedRelease.tracking.type)}
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 tracking-tight uppercase px-4">
            {selectedRelease.title}
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Launching globally on {selectedRelease.releaseDate}
          </p>
        </div>

        {/* Countdown */}
        <CountdownGrid targetDate={targetDate} />

        {/* Stats Grid */}
        <div
          className="flex flex-col items-center justify-center 
            md:flex-row 
            gap-2 md:gap-4"
        >
          <StatsCard
            icon="devices"
            label="Platforms"
            content={
              <div className="flex gap-2 mt-1 flex-wrap">
                {selectedRelease.platforms?.map((platform, idx) => (
                  <span key={idx}>
                    <span className="text-sm font-bold text-white">
                      {platform}
                    </span>
                    {idx < selectedRelease.platforms.length - 1 && (
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
                {selectedRelease.waiters}
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
                {selectedRelease.hypeVelocity}
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
