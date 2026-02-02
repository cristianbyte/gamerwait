import { useState, useMemo } from "react";
import { TrackingType } from "../types/TrakingType";
import TrackedGameCard from "./TrackedGameCard";
import SearchInput from "../ui/SearchInput";
import { useApp } from "../../context/AppContext";

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
  const { releases, selectedRelease } = useApp();

  const filteredGames = useMemo(() => {
    return releases.filter((game) => {
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
    <section className="flex flex-col h-full overflow-hidden relative">
      {/* Header with title and search */}
      <div className="px-4 pt-4 pb-3 border-b shrink-0 border-white/5">
        <p className="text-xs  uppercase tracking-widest mb-3">Tracking</p>

        {/* Search input */}
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* Scrollable game list */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 px-4 pt-3 pb-4">
        <div className="flex flex-col gap-3 ">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <TrackedGameCard
                key={game.id}
                game={game}
                className={selectedRelease === game.id ? "active" : ""}
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
      <div className="px-4 shrink-0 pb-4 pt-3 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`px-3 py-1.5 rounded-full  text-xs font-medium transition-all ${
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
