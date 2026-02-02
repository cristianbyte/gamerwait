import { useState } from "react";
import {
  getTimeLeftLabel,
  formatReleaseDateOrLive,
  formatDate,
} from "../countdown/TimeLeft.jsx";
import Icon from "../ui/Icon.jsx";
import { useApp } from "../../context/AppContext.jsx";
import { getTrackingLabel, getTrackingColor } from "../types/TrakingType.jsx";

export default function TrackedGameCard({ id, game, className }) {
  const [pinned, setPinned] = useState(false);
  const { selectedRelease, setSelectedRelease } = useApp();

  const togglePinned = (e) => {
    e.stopPropagation();
    setPinned(!pinned);
  };

  const handleCardClick = () => {
    setSelectedRelease(game);
  };

  return (
    <div
      className={`${className} relative overflow-hidden cursor-pointer bg-transparent w-full rounded-lg p-4 border border-white/5 hover:border-neon/80 transition-all duration-100`}
      onClick={handleCardClick}
    >
      {/* Header with title and pin */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="text-xl font-count text-neon font-extrabold leading-tight">
            {game.title}
          </h3>
          <p className="text-xs text-slate mt-1">{game.subtitle}</p>
        </div>
        <button
          onClick={togglePinned}
          className="ml-2 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Pin"
        >
          <span
            className={`inline-block w-max px-1 py-1 rounded-md text-xs font-semibold border ${getTrackingColor(game.tracking.type)}`}
          >
            {getTrackingLabel(game.tracking.type)}
          </span>
        </button>
      </div>

      {/* Followers */}
      <div className="flex items-center gap-2">
        <Icon name="follow" className="w-4 h-4 text-slate" />
        <span className="text-xs font-count text-slate">
          {parseInt(game.followers).toLocaleString()}
        </span>
        <div className="text-xs text-slate ml-auto">
          {formatReleaseDateOrLive(game.tracking.startAt)}
        </div>
      </div>

      {game.tracking.type !== "release" && (
        <div className="pt-1 mt-2 flex items-center text-xs text-slate border-t border-white/10">
          <span>
            {game.tracking.startAt && formatDate(game.tracking.startAt)}
          </span>

          {game.tracking.endAt && (
            <span className="ml-auto">
              {getTimeLeftLabel(game.tracking.endAt)}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
