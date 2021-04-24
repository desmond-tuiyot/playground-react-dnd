import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const ActionButtons = ({ buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Grid key={index} item xs={12}>
          <Button variant="contained" onClick={button.handleClick} fullWidth>
            {button.text}
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default ActionButtons;
