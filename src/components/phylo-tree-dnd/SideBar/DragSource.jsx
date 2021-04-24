import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  neutral: {
    ...theme.dragStyles.neutral,
  },

  clicked: {
    ...theme.dragStyles.clicked,
  },

  hover: { ...theme.dragStyles.hover },

  root: {
    padding: theme.spacing(1.5, 1),
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

const DragSource = ({ iguana }) => {
  const [dragStyle, setDragStyle] = useState("neutral");
  const classes = useStyles({ dragStyle });
  const [, drag] = useDrag(() => ({
    type: "iguana",
    item: { iguana },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        setDragStyle("neutral");
      }
    },
  }));

  const handleClick = () => {};

  const handleMouseOver = () => {
    setDragStyle("hover");
  };

  const handleMouseLeave = () => {
    setDragStyle("neutral");
  };

  const handleMouseDown = () => {
    setDragStyle("clicked");
  };

  const handleMouseUp = () => {
    setDragStyle("neutral");
  };

  return (
    <Grid item xs={12}>
      <Paper
        className={clsx(classes.root, classes[dragStyle])}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        elevation={1}
        variant="outlined"
        role="drag-source"
        ref={drag}
      >
        <Typography className={classes.text}>
          <DragIndicatorIcon fontSize="small" />
          <span className={classes.iguanaName}>{iguana}</span>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default DragSource;
