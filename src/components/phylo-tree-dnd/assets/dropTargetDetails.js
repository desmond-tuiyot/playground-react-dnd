export const dropTargetsBounds = [
  // left mid = Green Iguana
  {
    id: "root",
    width: 200,
    height: 100,
    top: 220,
    left: 60,
  },
  // top right = Marine Iguana / Land Iguana
  {
    id: "topBranch",
    width: 200,
    height: 100,
    top: 85,
    left: 700,
  },
  // bottom right = Marine Iguana / Land Iguana
  {
    id: "bottomBranch",
    width: 200,
    height: 100,
    top: 355,
    left: 700,
  },
];

export const dropTargets = [
  {
    currentIguana: null,
    id: "root",
    validIguanas: ["Green Iguana"],
    bounds: {
      width: 200,
      height: 100,
      top: 220,
      left: 60,
    },
  },
  {
    currentIguana: null,
    id: "topBranch",
    validIguanas: ["Marine Iguana", "Land Iguana"],
    bounds: {
      width: 200,
      height: 100,
      top: 85,
      left: 700,
    },
  },
  {
    currentIguana: null,
    id: "bottomBranch",
    validIguanas: ["Marine Iguana", "Land Iguana"],
    bounds: {
      width: 200,
      height: 100,
      top: 355,
      left: 700,
    },
  },
];

export const imageDimensions = {
  width: 960,
  height: 540,
};
