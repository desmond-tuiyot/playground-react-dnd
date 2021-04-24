import { screen, render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// import PhyloTreeDnD from "../PhyloTreeDnD";
import SideBar from "../SideBar";
import MainActivity from "../MainActivity";

describe("tests for phylogenetic tree drag and drop activity", () => {
  test("instructions, drag sources, and action buttons are rendered", () => {
    render(<SideBar />);

    const header = screen.getByRole("heading", { name: /instructions/i });
    expect(header).toBeInTheDocument();

    const instructions = screen.getByText(
      /Create a phylogenetic tree by dragging/i
    );
    expect(instructions).toBeInTheDocument();

    const dragSources = screen.getAllByText(/iguana$/i);
    expect(dragSources).toHaveLength(3);
    dragSources.forEach((item) => expect(item).toHaveTextContent(/iguana/i));

    const actionButtons = screen.getAllByRole("button", { name: /tree/i });
    expect(actionButtons).toHaveLength(3);
    actionButtons.forEach((item) => expect(item).toHaveTextContent(/tree/i));
  });

  test("empty tree image and drop targets are rendered", () => {
    render(<MainActivity />);

    const treeImage = screen.getByRole("img", { name: /phylogenetic tree/i });
    expect(treeImage).toBeInTheDocument();

    const dropTargets = screen.getAllByText(/drop an iguana here/i);
    expect(dropTargets).toHaveLength(3);
  });
});
