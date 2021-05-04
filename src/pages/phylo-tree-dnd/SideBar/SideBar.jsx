import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import ActionButtons from "components/ActionButtons";
import Instructions from "components/Instructions";
// import DragSources from "./DragSources";
import UndraggedIguanasPanel from "./UndraggedIguanasPanel";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", marginTop: theme.spacing(3) },
}));

const SideBar = ({
  handleDragStart,
  onDrop,
  undraggedIguanas,
  actionButtons,
  allowTransition,
}) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid item container justify="center" spacing={2}>
        <Instructions />
      </Grid>
      <UndraggedIguanasPanel
        allowTransition={allowTransition}
        onDrop={onDrop}
        handleDragStart={handleDragStart}
        undraggedIguanas={undraggedIguanas}
      />
      <Grid item container justify="center" spacing={2}>
        <ActionButtons buttons={actionButtons} />
      </Grid>
    </Grid>
  );
};

SideBar.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
  actionButtons: PropTypes.array.isRequired,
};

export default SideBar;
