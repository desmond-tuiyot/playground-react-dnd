import { fireEvent } from "@testing-library/react";

const tick = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

export const fireDragDrop = async (source, target) => {
  fireEvent.dragStart(source);
  fireEvent.dragEnter(target);
  fireEvent.dragOver(target);
  fireEvent.drop(target);
  await tick();
};

export const fireDragHover = async (source, target) => {
  fireEvent.dragStart(source);
  fireEvent.dragEnter(target);
  fireEvent.dragOver(target);
  await tick();
};

export const fireDrag = async (source) => {
  fireEvent.dragStart(source);
  await tick();
};

export const fireReleaseDrag = async (source) => {
  fireEvent.drop(window);
  await tick();
};
