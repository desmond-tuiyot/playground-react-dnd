import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import SideBar from "./SideBar";
import MainActivity from "./MainActivity";
import CustomDragLayer from "./SideBar/CustomDragLayer";
import { iguanaNames, dropTargets } from "./assets/dropTargetDetails";
import * as utils from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.grey["500"]}`,
  },
}));

const PhyloTreeDnD = () => {
  const classes = useStyles();

  const [undraggedIguanas, setUndraggedIguanas] = useState(iguanaNames);
  const [draggedIguanas, setDraggedIguanas] = useState(dropTargets);
  const [treeCorrectnessMarkers, setTreeCorrectnessMarkers] = useState(null);
  const [allowTransition, setAllowTransition] = useState(false);

  const handleDragStart = () => {
    setAllowTransition(false);
    setTreeCorrectnessMarkers(null);
  };

  const handleDrop = (droppedItem, iguanaDetails) => {
    const { iguana, source, destination } = droppedItem;
    if (destination === "tree") {
      const id = iguanaDetails.id;
      const previousItem = iguanaDetails.currentIguana;

      let newUndragged = utils.getNewUndraggedIguanas(
        undraggedIguanas,
        previousItem,
        iguana
      );
      let newDragged = utils.getNewDraggedIguanas(
        draggedIguanas,
        id,
        iguana,
        source
      );

      setUndraggedIguanas(newUndragged);
      setDraggedIguanas(newDragged);
    } else if (source !== "sidebar" && destination === "sidebar") {
      setUndraggedIguanas([...undraggedIguanas, iguana]);
      const newDraggedIguanas = draggedIguanas.map((item) => {
        return {
          ...item,
          currentIguana:
            item.currentIguana === iguana ? null : item.currentIguana,
        };
      });
      setDraggedIguanas(newDraggedIguanas);
    }
  };

  const handleResetTree = () => {
    setUndraggedIguanas(iguanaNames);
    setDraggedIguanas(dropTargets);
    setTreeCorrectnessMarkers(null);
  };

  const handleShowTree = () => {
    setAllowTransition(true);
    setTreeCorrectnessMarkers(null);
    setUndraggedIguanas([]);

    const newDraggedIguanas = utils.getCompletedTree(draggedIguanas);
    setDraggedIguanas(newDraggedIguanas);
  };

  const handleCheckTree = () => {
    setAllowTransition(true);
    setTreeCorrectnessMarkers(utils.getTreeCorrectnessMarkers(draggedIguanas));
  };

  const actionButtons = [
    { text: "Check Tree", handleClick: handleCheckTree },
    { text: "Show Tree", handleClick: handleShowTree },
    { text: "Reset Tree", handleClick: handleResetTree },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          justify="center"
          className={classes.root}
          alignItems="stretch"
        >
          <Grid item xs={6} sm={3} md={2}>
            <SideBar
              allowTransition={allowTransition}
              onDrop={handleDrop}
              undraggedIguanas={undraggedIguanas}
              actionButtons={actionButtons}
              handleDragStart={handleDragStart}
            />
          </Grid>
          <Grid item xs>
            <MainActivity
              allowTransition={allowTransition}
              draggedIguanas={draggedIguanas}
              onDrop={handleDrop}
              treeCorrectnessMarkers={treeCorrectnessMarkers}
              handleDragStart={handleDragStart}
            />
          </Grid>
        </Grid>
        <CustomDragLayer />
      </Container>
    </>
  );
};

export default PhyloTreeDnD;
