import { ThemeProvider } from "@material-ui/core/styles";

import PhyloTreeDnD from "./phylo-tree-dnd/PhyloTreeDnD";
import theme from "../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PhyloTreeDnD />
    </ThemeProvider>
  );
}

export default App;
