import { useEffect, useState, useMemo } from "react";

function getTimeRemaining(targetDate) {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function useCountdown(releaseDateUTC) {
  const targetDate = useMemo(() => new Date(releaseDateUTC), [releaseDateUTC]);

  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

export default function Countdown({ releaseDate, className }) {
  const timeLeft = useCountdown(releaseDate);

  if (!timeLeft) {
    return <span className={`text-neon text-xs font-bold line-0`}>LIVE</span>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={className}>
      <span>{pad(days)}d : </span>
      <span>{pad(hours)}h : </span>
      <span>{pad(minutes)}m : </span>
      <span>{pad(seconds)}s</span>
    </div>
  );
}
