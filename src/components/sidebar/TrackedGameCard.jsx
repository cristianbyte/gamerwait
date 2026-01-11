import { useState } from "react";
import Countdown from "../countdown/Countdown.jsx";
import Icon from "../ui/Icon.jsx";

export default function TrackedGameCard({
  title,
  subtitle,
  followers,
  tracking,
}) {
  const [pinned, setPinned] = useState(false);

  const togglePinned = () => {
    setPinned(!pinned);
  };

  const getTrackingLabel = () => {
    switch (tracking.type) {
      case "release":
        return "Release";
      case "season":
        return "Season";
      case "ranked_act":
        return "Ranked Act";
      default:
        return "Event";
    }
  };

  const getTrackingColor = () => {
    switch (tracking.type) {
      case "release":
        return "text-purple-400 border-purple-500/30";
      case "season":
        return "text-blue-400 border-blue-500/30";
      case "ranked_act":
        return "text-orange-400 border-orange-500/30";
      default:
        return "text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="cursor-pointer bg-transparent w-full rounded-lg p-4 border border-white/5 hover:border-neon/40 transition-all duration-300">
      {/* Header with title and pin */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="text-xl font-sans text-neon font-bold leading-tight">
            {title}
          </h3>
          <p className="text-xs text-slate mt-1">{subtitle}</p>
        </div>
        <button
          onClick={togglePinned}
          className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Pin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={pinned ? "currentColor" : "none"}
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`w-5 h-5 cursor-pointer ${
              pinned ? "text-neon" : "text-slate"
            }`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
            <path d="M9 15l-4.5 4.5" />
            <path d="M14.5 4l5.5 5.5" />
          </svg>
        </button>
      </div>

      {/* Tracking type badge */}
      <div className="mb-2">
        <span
          className={`inline-block px-3 py-1 rounded-md text-xs font-semibold border ${getTrackingColor()}`}
        >
          {getTrackingLabel()}
        </span>
      </div>

      {/* Followers */}
      <div className="flex items-center gap-2 mb-2">
        <Icon name="follow" className="w-4 h-4 text-slate" />
        <span className="text-xs font-sans text-slate">
          {parseInt(followers).toLocaleString()}
        </span>
      </div>

      {/* Countdown */}
      <div className="pt-1 border-t border-white/10">
        <Countdown
          releaseDate={tracking.startAt}
          className="text-sm font-title text-slate"
        />
        {tracking.endAt && (
          <p className="text-xs text-muted mt-1">
            Ends: {tracking.endAt.toISOString().split("T")[0]}
          </p>
        )}
      </div>
    </div>
  );
}
