import { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import phylotree from "../assets/dnd-tree.png";
import DropTarget from "./DropTarget";
import {
  dropTargetsBounds,
  imageDimensions,
} from "../assets/dropTargetDetails";
import useWindowResize from "../../../hooks/useWindowResize";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
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
  const imageRef = useRef();
  const windowDimensions = useWindowResize();
  const [scaledBounds, setScaledBounds] = useState(dropTargetsBounds);

  useEffect(() => {
    const { width } = imageRef.current.getBoundingClientRect();
    const ratio = width / imageDimensions.width;
    const newBounds = dropTargetsBounds.map((bound) => ({
      width: bound.width * ratio,
      height: bound.height * ratio,
      top: bound.top * ratio,
      left: bound.left * ratio,
    }));
    setScaledBounds(newBounds);
  }, [windowDimensions]);

  const dropTargets = dropTargetsBounds.map((_, index) => (
    <DropTarget key={index} bounds={scaledBounds[index]} />
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
