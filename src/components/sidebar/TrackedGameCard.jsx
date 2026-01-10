import { useState } from "react";
import Countdown from "../countdown/Countdown.jsx";
import Icon from "../ui/Icon.jsx";

export default function TrackedGameCard({
  title,
  relase_date,
  followers,
  platforms = [],
}) {
  const [favorite, setFavorite] = useState(["GTA IV", "Cyberpunk 2077"]);

  const toggleFavorite = () => {
    if (favorite.includes(title)) {
      setFavorite(favorite.filter((item) => item !== title));
    } else {
      setFavorite([...favorite, title]);
    }
  };

  const platformIcons = {
    ps: "brand-play",
    xbox: "brand-xbox",
    nintendo: "brand-nintendo",
    pc: "brand-pc",
  };

  const statusColors = {
    confirmed: "text-neon",
    rumored: "text-slate",
    canceled: "text-red-500",
  };

  return (
    <div className=" cursor-pointer bg-transparent w-full rounded-lg p-3 border border-white/5 hover:border-neon/40 transition-all-duration-100">
      <div className="w-full flex justify-between items-center mb-3">
        <p className="text-xl font-sans text-neon font-bold leading-tight">
          {title}
        </p>
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

      <div className="machines">
        <div className="flex gap-2 mb-2">
          {platforms.map((platform) => (
            <Icon
              key={platform.id}
              name={platformIcons[platform.id]}
              className={`w-4 h-4 ${
                statusColors[platform.status] || "text-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-row-reverse items-center">
        <span className=" flex text-xs font-sans gap-2 mt-1">
          <Icon name="trendingUp" className="w-4 h-4 text-accent" />
          {followers}
        </span>
        <div className="flex justify-between mt-1 text-xs text-muted">
          <span className="text-xs font-sans">{relase_date.split("T")[0]}</span>
        </div>
      </div>
    </div>
  );
}
