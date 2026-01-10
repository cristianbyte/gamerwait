import TrackedGameCard from "./TrackedGameCard";

export default function TrackedGameList() {
  return (
    <section className="flex flex-col h-full gap-3 relative pl-4 pt-4  pb-4 pr-2 overflow-y-scroll">
      <p className="text-xs text-white uppercase tracking-widest text-muted">
        Tracking
      </p>

      <TrackedGameCard
        title="GTA VI"
        followers="30.2k"
        relase_date="2026-11-19T00:00:00Z"
        platforms={[
          { id: "ps", status: "confirmed" },
          { id: "xbox", status: "confirmed" },
          { id: "pc", status: "rumored" },
        ]}
      />

      <TrackedGameCard
        title="Stellar Warfare: Infinity"
        followers="8.5k"
        relase_date="2026-11-19T00:00:00Z"
        platforms={[
          { id: "ps", status: "confirmed" },
          { id: "xbox", status: "confirmed" },
          { id: "nintendo", status: "confirmed" },
          { id: "pc", status: "confirmed" },
        ]}
      />

      <TrackedGameCard
        title="Legends of Eldoria"
        followers="6.2k"
        relase_date="2026-11-19T00:00:00Z"
        platforms={[
          { id: "ps", status: "confirmed" },
          { id: "xbox", status: "confirmed" },
          { id: "pc", status: "confirmed" },
        ]}
      />
    </section>
  );
}
