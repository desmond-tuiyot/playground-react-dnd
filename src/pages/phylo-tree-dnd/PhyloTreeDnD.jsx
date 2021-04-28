import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import produce from "immer";

import SideBar from "./SideBar";
import MainActivity from "./MainActivity";
import CustomDragLayer from "./SideBar/CustomDragLayer";
import { dropTargets } from "./assets/dropTargetDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.grey["500"]}`,
  },
}));

const PhyloTreeDnD = () => {
  const classes = useStyles();

  const iguanas = ["Green Iguana", "Marine Iguana", "Land Iguana"];

  const [undraggedIguanas, setUndraggedIguanas] = useState(iguanas);
  const [draggedIguanas, setDraggedIguanas] = useState(dropTargets);

  const handleDragEnd = (iguana) => {};

  const getNewState = produce((draft, id, newIguanaName) => {
    const index = draft.findIndex((item) => item.id === id);
    draft[index].currentIguana = newIguanaName;
  });

  const handleDrop = (id, droppedItem, previousItem) => {
    if (previousItem) {
      setUndraggedIguanas([...undraggedIguanas, droppedItem]);
    }
    const newState = getNewState(draggedIguanas, id, droppedItem);
    setDraggedIguanas(newState);
  };

  const handleResetTree = () => {};

  const handleShowTree = () => {};

  const handleCheckTree = () => {};

  const actionButtons = [
    { text: "Check Tree", handleCheckTree },
    { text: "Show Tree", handleShowTree },
    { text: "Reset Tree", handleResetTree },
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
              onDragEnd={handleDragEnd}
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
