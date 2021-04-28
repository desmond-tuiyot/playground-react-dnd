import { ThemeProvider } from "@material-ui/core/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import PhyloTreeDnD from "./phylo-tree-dnd/PhyloTreeDnD";
import theme from "../theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <PhyloTreeDnD />
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
