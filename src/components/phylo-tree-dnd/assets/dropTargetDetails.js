export const dropTargetsBounds = [
  // left mid = Green Iguana
  {
    currentIguana: null,
    id: "root",
    validIguanas: ["Green Iguana"],
    width: 200,
    height: 100,
    top: 220,
    left: 60,
  },
  // top right = Marine Iguana / Land Iguana
  {
    currentIguana: null,
    id: "topBranch",
    validIguanas: ["Marine Iguana", "Land Iguana"],
    width: 200,
    height: 100,
    top: 85,
    left: 700,
  },
  // bottom right = Marine Iguana / Land Iguana
  {
    currentIguana: null,
    id: "bottomBranch",
    validIguanas: ["Marine Iguana", "Land Iguana"],
    width: 200,
    height: 100,
    top: 355,
    left: 700,
  },
];

export const imageDimensions = {
  width: 960,
  height: 540,
};
