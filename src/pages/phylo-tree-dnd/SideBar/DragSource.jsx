import { useState, useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import PropTypes from "prop-types";

import IguanaNameBox from "./IguanaNameBox";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: "8em",
    height: "1em",
  },

  text: {
    display: "flex",
    alignItems: "center",
    fontWeight: theme.typography.fontWeightMedium,
    pointerEvents: "none",
  },

  iguanaName: {
    paddingLeft: theme.spacing(1),
  },
}));

const DragSource = ({ iguana, onDragEnd }) => {
  const classes = useStyles();
  const [dragStyle, setDragStyle] = useState("neutral");

  const [{ isDragging }, drag, preview] = useDrag({
    type: "iguana",
    item: { iguana },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        setDragStyle("neutral");
      } else {
        onDragEnd(item.iguana);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

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
    <Grid item xs={12} ref={drag}>
      <IguanaNameBox
        iguana={iguana}
        className={clsx(classes.root, classes[dragStyle])}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </Grid>
  );
};

DragSource.propTypes = {
  iguana: PropTypes.string.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default DragSource;
