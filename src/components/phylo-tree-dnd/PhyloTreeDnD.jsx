import Grid from "@material-ui/core/Grid";

import SideBar from "./SideBar";
import MainActivity from "./MainActivity/MainActivity";

const PhyloTreeDnD = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={3} md={2}>
        <SideBar />
      </Grid>
      <Grid item xs>
        <MainActivity />
      </Grid>
    </Grid>
  );
};

export default PhyloTreeDnD;
