import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: ({ top }) => top,
    left: ({ left }) => left,
    width: ({ width }) => width,
    height: ({ height }) => height,
    textAlign: "center",
  },
}));

const DropTarget = ({ bounds }) => {
  const classes = useStyles(bounds);

  return <div className={classes.root}>drop an iguana here</div>;
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
