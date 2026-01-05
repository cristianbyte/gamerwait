import TrackedGameList from "../sidebar/TrackedGameList";
import GlobalWaiters from "../sidebar/GlobalWaiters";

export default function Sidebar() {
  return (
    <aside className="w-75 bg-slate-900 text-slate-200 border-r border-white/5 p-4 flex flex-col gap-6">
      {/* Brand */}
      <div>
        <h1 className="text-xl font-semibold tracking-wide text-emerald-300">
          GAMERWAIT
        </h1>
        <p className="text-xs text-slate-400 mt-1">Release Tracker v2.1</p>
      </div>

      <div className="h-px bg-white/5" />

      <TrackedGameList />

      <div className="flex-1" />

      <GlobalWaiters />
    </aside>
  );
}
