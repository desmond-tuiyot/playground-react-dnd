import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { useEffect } from "react";

import DragSource from "../SideBar/DragSource";

const useStyles = makeStyles((theme) => ({
  ...theme.dropTarget,
  root: {
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    width: ({ width }) => width,
    height: ({ height }) => height,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const DropTarget = ({ bounds, iguana, onDrop, index }) => {
  const classes = useStyles(bounds);
  const [dropTargetClass, setDropTargetClass] = useState("neutral");

  const [{ isOver }, drop] = useDrop({
    accept: "iguana",
    drop: (item) => {
      onDrop(iguana.id, item.iguana, iguana.currentIguana);
      return item;
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  useEffect(() => {
    setDropTargetClass(isOver ? "hover" : "neutral");
  }, [isOver]);

  return (
    <div
      className={clsx(classes.root, classes[dropTargetClass])}
      data-testid={`target-${index}`}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="drop-target"
      ref={drop}
    >
      {iguana.currentIguana ? (
        <DragSource iguana={iguana.currentIguana} onDragEnd={() => {}} />
      ) : (
        <Typography variant="subtitle2" color="textSecondary">
          drop an iguana here
        </Typography>
      )}
    </div>
  );
};

DropTarget.propTypes = {
  bounds: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
};

export default DropTarget;
