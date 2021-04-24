import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5, 1),
  },
  text: {
    ...theme.typography,
    display: "flex",
    alignItems: "center",
    fontWeight: theme.typography.fontWeightMedium,
  },
  iguanaName: {
    paddingLeft: theme.spacing(1),
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
      <Paper className={classes.root} elevation={1} variant="outlined">
        <Typography className={classes.text}>
          <DragIndicatorIcon fontSize="small" />
          <span className={classes.iguanaName}>{iguana}</span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default DragSource;
