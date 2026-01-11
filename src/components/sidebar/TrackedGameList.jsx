import TrackedGameCard from "./TrackedGameCard";

export const TrackingType = Object.freeze({
  RELEASE: "release", // Release of the game
  SEASON: "season", // Content season
  RANKED_ACT: "ranked_act", // Competitive act
  EVENT: "event", // Special event (concerts, collabs)
  EXPANSION: "expansion", // Major DLC or expansion
});

export default function TrackedGameList() {
  return (
    <section className="flex flex-col h-full gap-3 relative pl-4 pt-4  pb-4 pr-2 overflow-y-scroll">
      <p className="text-xs text-white uppercase tracking-widest text-muted">
        Tracking
      </p>

      <TrackedGameCard
        title="GTA VI"
        subtitle="Grand Theft Auto VI"
        followers="30304"
        tracking={{
          type: TrackingType.RELEASE,
          startAt: new Date("2026-11-19T00:00:00Z"),
        }}
      />

      <TrackedGameCard
        title="Fortnite"
        subtitle="Chapter 7 - Season 1"
        followers="8502"
        tracking={{
          type: TrackingType.SEASON,
          startAt: new Date("2026-01-08T00:00:00Z"),
          endAt: new Date("2026-02-19T00:00:00Z"),
        }}
      />

      <TrackedGameCard
        title="Valorant"
        subtitle="Act 10 - Ignition"
        followers="5502"
        tracking={{
          type: TrackingType.RANKED_ACT,
          startAt: new Date("2026-01-08T00:00:00Z"),
          endAt: new Date("2026-03-19T08:00:00Z"),
        }}
      />
    </section>
  );
}
