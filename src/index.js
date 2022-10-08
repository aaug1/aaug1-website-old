import ReactDOM from "react-dom";
import App from "./App";
import {CssBaseline} from "@material-ui/core";
import {MuiThemeProvider, createTheme}  from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
