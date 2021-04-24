import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "./SideBar";
import MainActivity from "./MainActivity";
import CustomDragLayer from "./SideBar/CustomDragLayer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.grey["500"]}`,
  },
}));

const PhyloTreeDnD = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          justify="center"
          className={classes.root}
          alignItems="stretch"
        >
          <Grid item xs={6} sm={3} md={2}>
            <SideBar />
          </Grid>
          <Grid item xs>
            <MainActivity />
          </Grid>
        </Grid>
        <CustomDragLayer />
      </Container>
    </>
  );
};

export default PhyloTreeDnD;
