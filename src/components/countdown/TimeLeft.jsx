export function getTimeLeftLabel(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);

  const hourglassIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6888 12.5C15.566 11.4076 17.203 8.68855 17.7794 5.98398C18.0096 4.90367 17.1046 4 16 4H8C6.89543 4 5.99038 4.90367 6.22061 5.98398C6.797 8.68855 8.43404 11.4076 10.3112 12.5C8.43404 13.5924 6.797 16.3114 6.22061 19.016C5.99038 20.0963 6.89543 21 8 21H16C17.1046 21 18.0096 20.0963 17.7794 19.016C17.203 16.3114 15.566 13.5924 13.6888 12.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const checkIcon = (
    <span className="relative flex size-2 items-center justify-center">
      <span className="absolute inline-flex size-full rounded-full bg-neon opacity-75 animate-ping" />
      <span className="relative inline-flex size-2 rounded-full bg-neon" />
    </span>
  );

  if (isNaN(target)) {
    return (
      <div className="flex items-center gap-1">
        <span className="font-count text-slate-400">Date unknown</span>
      </div>
    );
  }

  const diffMs = target - now;

  if (diffMs <= 0) {
    return <div className="flex items-center gap-1 text-neon">{checkIcon}</div>;
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);

  if (months >= 1) {
    return (
      <div className="flex items-center gap-1">
        <span className="font-count">
          {months} month{months > 1 ? "s" : ""} left
        </span>
        {hourglassIcon}
      </div>
    );
  }

  if (days >= 1) {
    return (
      <div className="flex items-center gap-1">
        <span className="font-count">
          {days} day{days > 1 ? "s" : ""} left
        </span>
        {hourglassIcon}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <span className="font-count">Less than a day left</span>
      {hourglassIcon}
    </div>
  );
}

export function formatDate(date) {
  const d = new Date(date);
  if (isNaN(d)) return "Date TBA";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function formatReleaseDateOrLive(date) {
  const d = new Date(date);

  if (isNaN(d)) return "Date TBA";

  const checkIcon = (
    <span className="relative flex size-2 items-center justify-center">
      <span className="absolute inline-flex size-full rounded-full bg-neon opacity-75 animate-ping" />
      <span className="relative inline-flex size-2 rounded-full bg-neon" />
    </span>
  );

  const now = new Date();

  if (d <= now) {
    return (
      <div className="flex items-center gap-1 text-neon">
        <span className="font-count">LIVE</span>
        {checkIcon}
      </div>
    );
  }

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
