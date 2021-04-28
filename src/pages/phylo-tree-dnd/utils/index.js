import produce from "immer";

export * from "./dragDropEvents";

export const updateStateProps = produce((draft, newStyle) => {
  for (const prop in newStyle) {
    draft[prop] = newStyle[prop];
  }
});
