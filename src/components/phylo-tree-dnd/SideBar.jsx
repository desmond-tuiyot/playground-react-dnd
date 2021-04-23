import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

const SideBar = () => {
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} container justify="center">
        <Grid item xs={12}>
          <Typography variant="h6">Instructions</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Create a phylogenetic tree by dragging the iguana names below and
            place them on the tree to the right. Once done, press "Check Tree"
            button to check if made a correct tree.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Grid item xs={12}>
          <Typography>
            <DragIndicatorIcon /> Marine Iguana
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <DragIndicatorIcon /> Green Iguana
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <DragIndicatorIcon /> Land Iguana
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Button variant="contained" fullWidth>
          Check Tree
        </Button>
        <Button variant="contained" fullWidth>
          Show Tree
        </Button>
        <Button variant="contained" fullWidth>
          Reset Tree
        </Button>
      </Grid>
    </Grid>
  );
};

export default SideBar;
