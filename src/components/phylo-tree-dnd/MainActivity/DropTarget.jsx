import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

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

const DropTarget = ({ bounds }) => {
  const classes = useStyles(bounds);

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" color="textSecondary" component="span">
        drop an iguana here
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
