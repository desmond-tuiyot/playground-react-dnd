import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    ...theme.typography,
    display: "flex",
    alignItems: "center",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const DragSource = ({ iguana }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Typography className={classes.text}>
        <DragIndicatorIcon /> {iguana}
      </Typography>
    </Grid>
  );
};

export default DragSource;
