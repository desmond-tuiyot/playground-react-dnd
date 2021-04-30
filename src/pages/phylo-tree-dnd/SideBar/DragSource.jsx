import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useDrag } from "react-dnd";
import clsx from "clsx";
import PropTypes from "prop-types";

import IguanaNameBox from "components/IguanaNameBox";
import useNoDragSourcePreview from "hooks/useNoDragSourcePreview";
import useDragSourceStyle from "hooks/useDragSourceStyle";

const useStyles = makeStyles((theme) => ({
  ...theme.dragSource,

  root: {
    padding: theme.spacing(1.5, 1),
    width: "8em",
    height: "1em",
  },
}));

const DragSource = ({ source, iguana, handleDragStart }) => {
  const classes = useStyles();

  const [{ isDragging }, drag, preview] = useDrag({
    type: "iguana",
    item: () => {
      handleDragStart();
      return { iguana, source };
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const { handleEvent, dragStyle } = useDragSourceStyle(isDragging);
  useNoDragSourcePreview(preview);

  return (
    <Grid item xs={12} ref={drag}>
      {isDragging ? (
        <div className={classes.root} />
      ) : (
        <IguanaNameBox
          iguana={iguana}
          className={clsx(classes.root, classes[dragStyle])}
          onMouseOver={handleEvent}
          onMouseLeave={handleEvent}
          onMouseDown={handleEvent}
          onMouseUp={handleEvent}
        />
      )}
    </Grid>
  );
};

DragSource.propTypes = {
  iguana: PropTypes.string.isRequired,
};

export default DragSource;
