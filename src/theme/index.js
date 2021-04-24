import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
