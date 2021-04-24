import { makeStyles } from "@material-ui/core/styles";

import phylotree from "../assets/dnd-tree.png";
import DropTarget from "./DropTarget";
import {
  dropTargetsBounds,
  imageDimensions,
} from "../assets/dropTargetDetails";
import useScaledBounds from "../../../hooks/useScaledBounds";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
  },
  img: {
    width: "100%",
    maxWidth: "960px",
    height: "auto",
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
  const [imageRef, scaledBounds] = useScaledBounds(
    dropTargetsBounds,
    imageDimensions
  );

  const dropTargets = dropTargetsBounds.map((_, index) => (
    <DropTarget key={index} bounds={scaledBounds[index]} index={index} />
  ));

  return (
    <div className={classes.root}>
      <img
        ref={imageRef}
        src={phylotree}
        alt="phylogenetic tree"
        className={classes.img}
      />
      <div className={classes.dropTargetContainer}>{dropTargets}</div>
    </div>
  );
};

export default MainActivity;
