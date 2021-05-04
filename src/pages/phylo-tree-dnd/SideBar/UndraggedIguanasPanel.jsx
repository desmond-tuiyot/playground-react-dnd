import React from "react";
// import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { useDrop } from "react-dnd";

import DragSources from "./DragSources";

function UndraggedIguanasPanel({
  allowTransition,
  handleDragStart,
  onDrop,
  undraggedIguanas,
}) {
  const [, drop] = useDrop({
    accept: "iguana",
    drop: (item) => {
      onDrop({ ...item, destination: "sidebar" });
      return item;
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Grid
      item
      container
      justify="center"
      spacing={2}
      style={{ minHeight: "4em" }}
      ref={drop}
    >
      <DragSources
        handleDragStart={handleDragStart}
        undraggedIguanas={undraggedIguanas}
        allowTransition={allowTransition}
      />
    </Grid>
  );
}

UndraggedIguanasPanel.propTypes = {};

export default UndraggedIguanasPanel;
