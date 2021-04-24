import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

theme.dragStyles = {
  neutral: {
    backgroundColor: "#fff",
    cursor: "default",
    boxShadow: "none",
    margin: 0,
  },
  hover: {
    backgroundColor: "#eee",
    cursor: "grab",
    boxShadow: "none",
    margin: 0,
  },
  clicked: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
    cursor: "grabbing",
    margin: "-5px -10px 0 10px",
  },
};

theme = responsiveFontSizes(theme);

export default theme;
