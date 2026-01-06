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

  return (
    <div className="bg-transparent w-full rounded-lg p-3 border border-white/5 hover:border-neon/40 transition-all-duration-100">
      <div className="w-full flex justify-between items-center mb-10">
        <p className="text-sm font-medium text-text leading-tight">{title}</p>
        <Icon
          name="star"
          className="w-4 h-4 p-1 scale-200 text-accent cursor-pointer"
        />
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
