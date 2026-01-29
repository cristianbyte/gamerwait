import { useState, useEffect } from "react";

export default function CountdownGrid({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "DAY" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEC" },
  ];

  return (
    <div className="flex flex-row align-middle justify-center gap-3 w-full lg:gap-6 md:mb-16 px-2 md:px-4 lg:px-10">
      {timeUnits.map((unit) => (
        <div
          key={unit.label}
          className={`bg-slate-800/50 border w-max border-white/5 p-4 md:p-6 lg:p-8 text-center `}
        >
          <div
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tabular-nums mb-2 tracking-tighter`}
          >
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] md:text-[10px] lg:text-xs font-bold text-cyan-400 tracking-[0.3em] uppercase opacity-60">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
