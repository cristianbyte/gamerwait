import Icon from "../ui/Icon.jsx";

export default function TrackedGameCard({ title, progress, time }) {
  const progressValue =
    typeof progress === "string" ? progress : `${progress}%`;

  return (
    <div className="bg-panel cursor-pointer rounded-lg p-3 border border-white/5 hover:border-neon/40 transition-all-duration-100">
      <p className="text-sm font-medium text-text leading-tight">{title}</p>

      <div className="flex justify-between items-center mt-2 text-xs text-muted">
        <span>
          <span className="flex items-center gap-1">
            <Icon name="time" className="w-4 h-4 text-neon" />
            {time}
          </span>
        </span>
        <span>{progressValue}</span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full progress-gradient transition-all duration-300"
          style={{ width: progressValue }}
        />
      </div>
    </div>
  );
}
