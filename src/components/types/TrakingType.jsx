export const TrackingType = Object.freeze({
  RELEASE: "release",
  SEASON: "season",
  RANKED_ACT: "ranked_act",
  EVENT: "event",
  EXPANSION: "expansion",
});

export const getTrackingLabel = (type) => {
  switch (type) {
    case "release":
      return "Release";
    case "season":
      return "Season";
    case "ranked_act":
      return "Ranked Act";
    default:
      return "Event";
  }
};

export const getTrackingColor = (type) => {
  switch (type) {
    case "release":
      return "text-purple-400 border-purple-500/30 bg-purple-500/10";
    case "season":
      return "text-blue-400 border-blue-500/30 bg-blue-500/10 ";
    case "ranked_act":
      return "text-orange-400 border-orange-500/30 bg-orange-500/10 ";
    default:
      return "text-gray-400 border-gray-500/30 bg-gray-500/10";
  }
};

export const getOnlyColor = (type) => {
  switch (type) {
    case "release":
      return "bg-purple-500";
    case "season":
      return "bg-blue-500";
    case "ranked_act":
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
};
