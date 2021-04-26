import { useDragLayer } from "react-dnd";
import { makeStyles } from "@material-ui/core/styles";

import DragSourcePreview from "./DragSourcePreview";

const useStyles = makeStyles((theme) => ({
  dragLayer: {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
}));

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer = () => {
  const classes = useStyles();
  const {
    item,
    // itemType,
    initialSourceOffset,
    currentSourceOffset,
    isDragging,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialSourceOffset: monitor.getInitialSourceClientOffset(),
    currentSourceOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) return null;

  return (
    <div className={classes.dragLayer}>
      <div style={getItemStyles(initialSourceOffset, currentSourceOffset)}>
        <DragSourcePreview iguana={item.iguana} />
      </div>
    </div>
  );
};

export default CustomDragLayer;