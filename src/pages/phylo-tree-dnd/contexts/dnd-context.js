import * as React from "react";

const DnDContext = React.createContext();

// const handleDragStart = () => {};

const DnDContextProvider = ({ children }) => {
  const [treeCorrectnessMarkers, setTreeCorrectnessMarkers] = React.useState(
    null
  );
  const value = { treeCorrectnessMarkers, setTreeCorrectnessMarkers };
  return <DnDContext.Provider value={value}> {children} </DnDContext.Provider>;
};

const useDnD = () => {
  const context = React.useContext(DnDContext);
  if (!context) {
    throw new Error("useDnD must be used within DnDContext");
  }
  return context;
};

export { DnDContextProvider, useDnD };
