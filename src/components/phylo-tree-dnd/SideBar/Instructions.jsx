import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Instructions = () => {
  return (
    <>
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
    </>
  );
};

export default Instructions;
