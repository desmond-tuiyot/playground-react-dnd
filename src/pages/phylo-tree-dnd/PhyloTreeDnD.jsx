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

  const handleDrop = (id, droppedItem, previousItem) => {
    const { iguana, source } = droppedItem;
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
  };

  const handleResetTree = () => {
    setUndraggedIguanas(iguanaNames);
    setDraggedIguanas(dropTargets);
  };

  const handleShowTree = () => {};

  const handleCheckTree = () => {};

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
              undraggedIguanas={undraggedIguanas}
              actionButtons={actionButtons}
            />
          </Grid>
          <Grid item xs>
            <MainActivity draggedIguanas={draggedIguanas} onDrop={handleDrop} />
          </Grid>
        </Grid>
        <CustomDragLayer />
      </Container>
    </>
  );
};

export default PhyloTreeDnD;
