import produce from "immer";

export * from "./dragDropEvents";

export const updateStateProps = produce((draft, newStyle) => {
  for (const prop in newStyle) {
    draft[prop] = newStyle[prop];
  }
});

export const getNewDraggedIguanas = produce(
  (draft, id, newIguanaName, source) => {
    if (source !== "sidebar") {
      const sourceIndex = draft.findIndex((item) => item.id === source);
      draft[sourceIndex].currentIguana = null;
    }

    const destinationIndex = draft.findIndex((item) => item.id === id);
    draft[destinationIndex].currentIguana = newIguanaName;
  }
);

export const getNewUndraggedIguanas = (
  undraggedIguanas,
  previousItem,
  droppedItem
) => {
  let newUndragged = [...undraggedIguanas];

  if (previousItem) {
    newUndragged.push(previousItem);
  }

  newUndragged = newUndragged.filter((iguana) => iguana !== droppedItem);
  return newUndragged;
};

export const noop = () => {};
