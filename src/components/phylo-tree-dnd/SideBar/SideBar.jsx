import Grid from "@material-ui/core/Grid";

import ActionButtons from "./ActionButtons";
import Instructions from "./Instructions";
import DragSources from "./DragSources";

const SideBar = () => {
  const buttons = [
    { text: "Check Tree", handleClick: () => {} },
    { text: "Show Tree", handleClick: () => {} },
    { text: "Reset Tree", handleClick: () => {} },
  ];

  const iguanas = ["Green Iguana", "Marine Iguana", "Land Iguana"];

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={12} container justify="center" spacing={2}>
        <Instructions />
      </Grid>
      <Grid item xs={12} container justify="center" spacing={2}>
        <DragSources iguanas={iguanas} />
      </Grid>
      <Grid item xs={12} container justify="center" spacing={2}>
        <ActionButtons buttons={buttons} />
      </Grid>
    </Grid>
  );
};

export default SideBar;
