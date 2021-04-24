import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDrop } from "react-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    width: ({ width }) => width,
    height: ({ height }) => height,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const DropTarget = ({ bounds, index }) => {
  const classes = useStyles(bounds);
  const [text, setText] = useState("drop an iguana here");
  const [, drop] = useDrop(() => ({
    accept: "iguana",
    drop: (item) => {
      setText(item.iguana);
      return item;
    },
  }));

  return (
    <div
      className={classes.root}
      data-testid={`target-${index}`}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="drop-target"
      ref={drop}
    >
      <Typography variant="subtitle2" color="textSecondary" component="span">
        {text}
      </Typography>
    </div>
  );
};

DropTarget.propTypes = {
  bounds: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
};

export default DropTarget;
