import { useState } from "react";
import TrackedGameList from "../sidebar/TrackedGameList";
import GlobalWaiters from "../sidebar/GlobalWaiters";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const closeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
  const openSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <>
      {/* TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed top-4 left-4 z-50
          bg-slate-800 text-white
          px-3 py-2 rounded h-10 w-10
          md:hidden
          flex items-center justify-center
          shadow-lg
        "
      >
        {open ? closeSVG : openSVG}
      </button>

      {/* OVERLAY  */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 bg-black/50 z-40
            md:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-40
          h-dvh bg-slate-900 text-slate-200
          border-r border-white/5
          flex flex-col
          transition-transform duration-300
          w-72

          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-4 pt-16 md:pt-4">
          <h1 className="text-xl font-semibold text-emerald-300">GAMERWAIT</h1>
          <p className="text-xs text-slate-400">Release Tracker v0.1</p>
        </div>

        <TrackedGameList />
        <GlobalWaiters />
      </aside>
    </>
  );
}
