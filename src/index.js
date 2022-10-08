import ReactDOM from "react-dom";
import App from "./App";
import {CssBaseline} from "@material-ui/core";
import {MuiThemeProvider, createTheme}  from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

ReactDOM.render(
  <>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </>,
  document.getElementById("root")
);
