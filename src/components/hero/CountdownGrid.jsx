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
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 mb-12 md:mb-16 px-2 md:px-4 lg:px-10">
      {timeUnits.map((unit, idx) => (
        <div
          key={unit.label}
          className={`bg-slate-800/50 border border-white/5 rounded-xl lg:rounded-2xl p-4 md:p-4 lg:p-8 text-center ${
            idx === 3 ? "shadow-lg shadow-cyan-500/20" : ""
          }`}
        >
          <div
            className={`text-4xl md:text-5xl lg:text-7xl font-bold tabular-nums mb-2 tracking-tighter ${
              idx === 3 ? "text-cyan-400" : "text-white"
            }`}
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
