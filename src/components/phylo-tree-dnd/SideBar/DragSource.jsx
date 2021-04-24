import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";

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
  const [, drag] = useDrag(() => ({
    type: "iguana",
    item: { iguana },
  }));

  return (
    <Grid item xs={12} role="drag-source" ref={drag}>
      <Typography className={classes.text}>
        <DragIndicatorIcon />
        {iguana}
      </Typography>
    </Grid>
  );
};

export default DragSource;
