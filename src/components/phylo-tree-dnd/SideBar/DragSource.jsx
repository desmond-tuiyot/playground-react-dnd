import { useState, useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: "200px",
    height: "21px",
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
  const classes = useStyles();
  const [dragStyle, setDragStyle] = useState("neutral");

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "iguana",
    item: { iguana },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        setDragStyle("neutral");
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  useEffect(() => {
    if (isDragging) {
      setDragStyle("dragging");
    }
  }, [isDragging]);

  const handleClick = () => {};

  const handleMouseOver = () => {
    if (isDragging) return;
    setDragStyle("hover");
  };

  const handleMouseLeave = () => {
    if (isDragging) return;
    setDragStyle("neutral");
  };

  const handleMouseDown = () => {
    if (isDragging) return;
    setDragStyle("clicked");
  };

  const handleMouseUp = () => {
    if (isDragging) return;
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
