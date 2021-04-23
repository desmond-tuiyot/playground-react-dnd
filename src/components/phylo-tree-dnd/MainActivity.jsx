import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import phylotree from "../../assets/dnd-tree.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  dropTargetContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
  },
}));

const MainActivity = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={phylotree} alt="phylogenetic tree" className={classes.img} />
      <div className={classes.dropTargetContainer}>
        <div>drop an iguana here</div>
        <div>drop an iguana here</div>
        <div>drop an iguana here</div>
      </div>
    </div>
  );
};

export default MainActivity;
