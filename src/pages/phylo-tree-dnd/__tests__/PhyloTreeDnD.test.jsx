import { screen, render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { fireDragDrop } from "../utils/dragDropEvents";
import PhyloTreeDnD from "../PhyloTreeDnD";
import SideBar from "../SideBar";
import MainActivity from "../MainActivity";

describe("Phylogenetic tree drag and drop activity", () => {
  test("instructions, drag sources, and action buttons are rendered", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <SideBar />
      </DndProvider>
    );

    const header = screen.getByRole("heading", { name: /instructions/i });
    expect(header).toBeInTheDocument();

    const instructions = screen.getByText(
      /Create a phylogenetic tree by dragging/i
    );
    expect(instructions).toBeInTheDocument();

    const dragSources = screen.getAllByRole("drag-source");
    expect(dragSources).toHaveLength(3);
    dragSources.forEach((item) => expect(item).toHaveTextContent(/iguana/i));

    const actionButtons = screen.getAllByRole("button", { name: /tree/i });
    expect(actionButtons).toHaveLength(3);
    actionButtons.forEach((item) => expect(item).toHaveTextContent(/tree/i));
  });

  test("empty tree image and drop targets are rendered", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <MainActivity />
      </DndProvider>
    );

    const treeImage = screen.getByRole("img", { name: /phylogenetic tree/i });
    expect(treeImage).toBeInTheDocument();

    const dropTargets = screen.getAllByRole("drop-target");
    expect(dropTargets).toHaveLength(3);
  });

  test("can drag from drag source and drop on any target", async () => {
    const WrappedMainActivity = () => (
      <DndProvider backend={HTML5Backend}>
        <PhyloTreeDnD />
      </DndProvider>
    );
    render(<WrappedMainActivity />);

    const dragSource = screen.getByText(/marine iguana/i);
    let leftMidTarget = screen.getByTestId("target-0");

    await fireDragDrop(dragSource, leftMidTarget);

    leftMidTarget = screen.getByTestId("target-0");
    const withinTarget = within(leftMidTarget);
    const targetText = withinTarget.getByText(/marine iguana/i);

    expect(targetText).toHaveTextContent(/marine iguana/i);
  });

  // TODO: write test for state of drag source on hover
  test("drag sources have correct initial styling", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <SideBar />
      </DndProvider>
    );

    // correct initial state
    // const dragSources = screen.getAllByRole("drag-source");
    // dragSources.map((dragSource) =>
    //   expect(dragSource).toHaveStyle({ backgroundColor: "rgb(255,255,255)" })
    // );

    // style on hover
    // dragSources.forEach((dragSource) => {
    //   userEvent.hover(dragSource);
    //   expect(dragSource).toHaveStyle({
    //     backgroundColor: "rgb(238,238,238)",
    //     cursor: "grab",
    //   });
    // });
  });

  // TODO: write test for state of drag source on click

  // TODO: write test for state of drag source on drag start

  // TODO: write test for state of drag source on dragOver a drop target

  // TODO: write test for state of drag source on drop

  // TODO: write test for state of drop target on drag start

  // TODO: write test for state of drop target when dragOver with drag source

  // TODO: write test for state of drop target on drop
});
