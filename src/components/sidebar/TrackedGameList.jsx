import { useState, useMemo } from "react";
import TrackedGameCard from "./TrackedGameCard";

export const TrackingType = Object.freeze({
  RELEASE: "release",
  SEASON: "season",
  RANKED_ACT: "ranked_act",
  EVENT: "event",
  EXPANSION: "expansion",
});

const GAMES_DATA = [
  {
    id: 1,
    title: "GTA VI",
    subtitle: "Grand Theft Auto VI",
    followers: "30304",
    tracking: {
      type: TrackingType.RELEASE,
      startAt: new Date("2026-11-19T00:00:00Z"),
    },
  },
  {
    id: 2,
    title: "Fortnite",
    subtitle: "Chapter 7 - Season 1",
    followers: "8502",
    tracking: {
      type: TrackingType.SEASON,
      startAt: new Date("2026-01-08T00:00:00Z"),
      endAt: new Date("2026-02-19T00:00:00Z"),
    },
  },
  {
    id: 3,
    title: "Valorant",
    subtitle: "Act 10 - Ignition",
    followers: "5502",
    tracking: {
      type: TrackingType.RANKED_ACT,
      startAt: new Date("2026-01-08T00:00:00Z"),
      endAt: new Date("2026-03-19T08:00:00Z"),
    },
  },
];

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: TrackingType.RELEASE, label: "Release" },
  { value: TrackingType.SEASON, label: "Season" },
  { value: TrackingType.RANKED_ACT, label: "Ranked Act" },
  { value: TrackingType.EVENT, label: "Event" },
  { value: TrackingType.EXPANSION, label: "Expansion" },
];

export default function TrackedGameList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      // Filter by search query
      const matchesSearch =
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedFilter === "all" || game.tracking.type === selectedFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <section className="flex flex-col max-h-screen overflow-hidden relative">
      {/* Header with title and search */}
      <div className="px-4 pt-4 pb-3 border-b shrink-0 border-white/5">
        <p className="text-xs  uppercase tracking-widest mb-3">Tracking</p>

        {/* Search input */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-muted focus:outline-none focus:border-neon/40 transition-colors"
          />
        </div>
      </div>

      {/* Scrollable game list */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 px-4 pt-3 pb-4">
        <div className="flex flex-col gap-3 ">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <TrackedGameCard
                key={game.id}
                title={game.title}
                subtitle={game.subtitle}
                followers={game.followers}
                tracking={game.tracking}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-slate text-sm">
                Nothing spawned here. Try again.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Filter buttons at bottom */}
      <div className="px-4 shrink-0 pb-4 pt-3 flex-end border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === option.value
                  ? "bg-neon text-black"
                  : "bg-white/5 text-slate hover:bg-white/10 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
