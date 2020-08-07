import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";


const render = () => {
  const App = require("./App").default;
  const theme = createMuiTheme({
    palette: {
      primary: red
    }
  });
  ReactDOM.render(
    <Router>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Router>,
    document.getElementById("root")
  );
};

render();

//@ts-ignore
if (process.env.NODE_ENV === "development" && module.hot) {
  //@ts-ignore
  module.hot.accept("./App", render);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
