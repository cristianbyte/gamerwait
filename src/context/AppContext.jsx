import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedRelease, setSelectedRelease] = useState(1);
  const [releases, setReleases] = useState([
    {
      id: 1,
      title: "GTA VI",
      subtitle: "Grand Theft Auto VI",
      followers: "30304",
      tracking: {
        type: "release",
        startAt: new Date("2026-11-19T00:00:00Z"),
      },
    },
    {
      id: 2,
      title: "Fortnite Chapter 7",
      subtitle: "Chapter 7 - Season 1",
      followers: "8502",
      tracking: {
        type: "season",
        startAt: new Date("2026-01-08T00:00:00Z"),
        endAt: new Date("2026-02-19T00:00:00Z"),
      },
    },
    {
      id: 3,
      title: "Valorant Act 10",
      subtitle: "Act 10 - Ignition",
      followers: "5502",
      tracking: {
        type: "ranked_act",
        startAt: new Date("2026-01-08T00:00:00Z"),
        endAt: new Date("2026-03-19T08:00:00Z"),
      },
    },
  ]);
  const [userInfo, setUserInfo] = useState({
    username: "waiter",
    email: "waiter@mail.com",
    avatar: "/avatar.png",
  });

  return (
    <AppContext.Provider
      value={{
        releases,
        setReleases,
        selectedRelease,
        setSelectedRelease,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
