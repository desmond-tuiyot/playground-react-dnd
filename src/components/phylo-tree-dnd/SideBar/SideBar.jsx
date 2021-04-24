import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import ActionButtons from "./ActionButtons";
import Instructions from "./Instructions";
import DragSources from "./DragSources";

const useStyles = makeStyles((theme) => ({
  root: { height: "100%", marginTop: theme.spacing(3) },
}));

const SideBar = () => {
  const classes = useStyles();

  const buttons = [
    { text: "Check Tree", handleClick: () => {} },
    { text: "Show Tree", handleClick: () => {} },
    { text: "Reset Tree", handleClick: () => {} },
  ];

  const iguanas = ["Green Iguana", "Marine Iguana", "Land Iguana"];

  return (
    <Grid container direction="column" spacing={2} className={classes.root}>
      <Grid item container justify="center" spacing={2}>
        <Instructions />
      </Grid>
      <Grid item container justify="center" spacing={2}>
        <DragSources iguanas={iguanas} />
      </Grid>
      <Grid item container justify="center" spacing={2}>
        <ActionButtons buttons={buttons} />
      </Grid>
    </Grid>
  );
};

export default SideBar;
