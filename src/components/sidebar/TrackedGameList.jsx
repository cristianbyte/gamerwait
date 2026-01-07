import TrackedGameCard from "./TrackedGameCard";

export default function TrackedGameList() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-xs text-white uppercase tracking-widest text-muted">
        Tracking
      </p>

      <TrackedGameCard
        title="GTA IV"
        progress="42%"
        followers="30.2k"
        remaining="89d 14h 45m"
        relase_date="19/11/2026"
      />

      <TrackedGameCard
        title="Stellar Warfare: Infinity"
        progress="25%"
        followers="8.5k"
        remaining="186d 8h 15m"
        relase_date="02/02/2027"
      />

      <TrackedGameCard
        title="Legends of Eldoria"
        progress="35%"
        followers="6.2k"
        remaining="133d 19h 30m"
        relase_date="15/01/2027"
      />
    </section>
  );
}
