import { useState } from "react";
import Icon from "../ui/Icon.jsx";

export default function TrackedGameCard({
  title,
  progress,
  remaining,
  relase_date,
  followers,
  img_url,
}) {
  const progressValue =
    typeof progress === "string" ? progress : `${progress}%`;

  const [favorite, setFavorite] = useState(["GTA IV", "Cyberpunk 2077"]);

  const toggleFavorite = () => {
    if (favorite.includes(title)) {
      setFavorite(favorite.filter((item) => item !== title));
    } else {
      setFavorite([...favorite, title]);
    }
  };

  return (
    <div className=" cursor-pointer bg-transparent w-full rounded-lg p-3 border border-white/5 hover:border-neon/40 transition-all-duration-100">
      <div className="w-full flex justify-between items-center mb-10">
        <p className="text-sm font-medium text-text leading-tight">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="cursor-pointer"
          onClick={toggleFavorite}
          viewBox="0 0 24 24"
        >
          {" "}
          m
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 17.75-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z"
            fill={favorite.includes(title) ? "currentColor" : "none"}
          />
        </svg>
      </div>

      <div className="flex justify-between items-center">
        <span className=" text-xs font-medium text-text mt-1 block">
          {progressValue}
        </span>
        <span className=" flex text-xs font-medium gap-2 mt-1">
          <Icon name="trendingUp" className="w-4 h-4 text-accent" />
          {followers}
        </span>
      </div>
      {/* Progress bar */}
      <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full progress-gradient transition-all duration-300"
          style={{ width: progressValue }}
        />
      </div>
      <div className="flex justify-between mt-1 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Icon name="time" className="w-4 h-4 text-neon" />
          {remaining}
        </span>
        <span className="text-xs">{relase_date}</span>
      </div>
    </div>
  );
}
