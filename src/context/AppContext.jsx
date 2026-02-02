import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [releases, setReleases] = useState([
    {
      id: 1,
      title: "GTA VI",
      subtitle: "Grand Theft Auto VI",
      followers: "30304",
      category: "Game Release",
      releaseDate: "November 19, 2026",
      platforms: ["PS5", "Xbox X/S", "PC"],
      waiters: "30,304",
      hypeVelocity: "+2.4%",
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
      category: "Season Launch",
      releaseDate: "January 8, 2026",
      platforms: ["All Platforms"],
      waiters: "8,502",
      hypeVelocity: "+1.8%",
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
      category: "Ranked Act",
      releaseDate: "January 8, 2026",
      platforms: ["PC"],
      waiters: "5,502",
      hypeVelocity: "+3.1%",
      tracking: {
        type: "ranked_act",
        startAt: new Date("2026-01-08T00:00:00Z"),
        endAt: new Date("2026-03-19T08:00:00Z"),
      },
    },
  ]);
  const [selectedRelease, setSelectedRelease] = useState(releases[0]);
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
