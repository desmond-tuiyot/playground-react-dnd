import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: "8em",
    height: "1em",
    cursor: "grabbing",
  },

  text: {
    ...theme.typography,
    display: "flex",
    alignItems: "center",
    fontWeight: theme.typography.fontWeightMedium,
    pointerEvents: "none",
  },

  iguanaName: {
    paddingLeft: theme.spacing(1),
  },
}));

const DragSourcePreview = ({ iguana }) => {
  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.root, classes.clicked)}
      elevation={1}
      variant="outlined"
      role="drag-source"
    >
      <Typography className={classes.text}>
        <DragIndicatorIcon fontSize="small" />
        <span className={classes.iguanaName}>{iguana}</span>
      </Typography>
    </Paper>
  );
};

export default DragSourcePreview;
