import { useState, useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import PropTypes from "prop-types";

import IguanaNameBox from "components/IguanaNameBox";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: "8em",
    height: "1em",
  },
}));

const useNoDragSourcePreview = (preview) => {
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
};

const DragSource = ({ source, iguana }) => {
  const classes = useStyles();
  const [dragStyle, setDragStyle] = useState("neutral");

  const [{ isDragging }, drag, preview] = useDrag({
    type: "iguana",
    item: { iguana, source },
    end: (_, monitor) => {
      if (!monitor.didDrop()) {
        setDragStyle("neutral");
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useNoDragSourcePreview(preview);

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
      {isDragging ? (
        <div className={classes.root} />
      ) : (
        <IguanaNameBox
          iguana={iguana}
          className={clsx(classes.root, classes[dragStyle])}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
      )}
    </Grid>
  );
};

DragSource.propTypes = {
  iguana: PropTypes.string.isRequired,
};

export default DragSource;
