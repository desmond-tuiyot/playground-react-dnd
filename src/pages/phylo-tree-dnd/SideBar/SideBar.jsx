import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import ActionButtons from "./ActionButtons";
import Instructions from "./Instructions";
import DragSources from "./DragSources";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", marginTop: theme.spacing(3) },
}));

const SideBar = ({ undraggedIguanas, onDragEnd, actionButtons }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid item container justify="center" spacing={2}>
        <Instructions />
      </Grid>
      <Grid item container justify="center" spacing={2}>
        <DragSources
          undraggedIguanas={undraggedIguanas}
          onDragEnd={onDragEnd}
        />
      </Grid>
      <Grid item container justify="center" spacing={2}>
        <ActionButtons buttons={actionButtons} />
      </Grid>
    </Grid>
  );
};

SideBar.propTypes = {
  undraggedIguanas: PropTypes.array.isRequired,
  onDragEnd: PropTypes.func.isRequired,
  actionButtons: PropTypes.array.isRequired,
};

export default SideBar;
