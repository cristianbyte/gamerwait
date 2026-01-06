import TrackedGameCard from "./TrackedGameCard";

export default function TrackedGameList() {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-xs text-white uppercase tracking-widest text-muted">
        Tracking
      </p>

      <TrackedGameCard
        title="Cyberpunk Nexus 2077"
        progress="42%"
        followers="30.2k"
        time="89d 14h"
      />

      <TrackedGameCard
        title="Stellar Warfare: Infinity"
        progress="25%"
        followers="8.5k"
        time="186d 8h"
      />

      <TrackedGameCard
        title="Legends of Eldoria"
        progress="35%"
        followers="6.2k"
        time="133d 19h"
      />
    </section>
  );
}
