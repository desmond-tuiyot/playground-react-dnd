import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
    fontSize: 12,
  },
});

theme.dragSource = {
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
  dragging: {
    display: "none",
    transition: "display 5s",
  },
};

theme.dropTarget = {
  hover: {
    backgroundColor: "#eee",
    border: "2px solid #aaa",
  },
  neutral: {
    backgroundColor: "#fff",
    border: "2px solid #aaa",
  },
  correct: {
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.success.main}`,
    color: theme.palette.success.main,
  },
  incorrect: {
    backgroundColor: "#fff",
    border: `2px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
