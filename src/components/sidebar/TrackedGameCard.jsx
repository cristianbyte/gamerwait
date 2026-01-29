import { useState } from "react";
import {
  getTimeLeftLabel,
  formatReleaseDateOrLive,
  formatDate,
} from "../countdown/TimeLeft.jsx";
import Icon from "../ui/Icon.jsx";
import { useApp } from "../../context/AppContext.jsx";

export default function TrackedGameCard({
  id,
  title,
  subtitle,
  followers,
  tracking,
  className,
}) {
  const [pinned, setPinned] = useState(false);
  const { selectedRelease, setSelectedRelease } = useApp();

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
    <div
      className={`${className} relative overflow-hidden cursor-pointer bg-transparent w-full rounded-lg p-4 border border-white/5 hover:border-neon/80 transition-all duration-100`}
      onClick={() => setSelectedRelease(id)}
    >
      {/* Header with title and pin */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="text-xl font-count text-neon font-extrabold leading-tight">
            {title}
          </h3>
          <p className="text-xs text-slate mt-1">{subtitle}</p>
        </div>
        <button
          onClick={togglePinned}
          className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Pin"
        >
          <span
            className={`inline-block w-max px-1 py-1 rounded-md text-xs font-semibold border ${getTrackingColor()}`}
          >
            {getTrackingLabel()}
          </span>
        </button>
      </div>

      {/* Followers */}
      <div className="flex items-center gap-2">
        <Icon name="follow" className="w-4 h-4 text-slate" />
        <span className="text-xs font-count text-slate">
          {parseInt(followers).toLocaleString()}
        </span>
        <div className="text-xs text-slate ml-auto">
          {formatReleaseDateOrLive(tracking.startAt)}
        </div>
      </div>

      {tracking.type !== "release" && (
        <div className="pt-1 mt-2 flex items-center text-xs text-slate border-t border-white/10">
          <span>{tracking.startAt && formatDate(tracking.startAt)}</span>

          {tracking.endAt && (
            <span className="ml-auto">{getTimeLeftLabel(tracking.endAt)}</span>
          )}
        </div>
      )}
    </div>
  );
}
