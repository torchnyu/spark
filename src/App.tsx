import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { createUseStyles } from "react-jss";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";

const useStyles = createUseStyles({
  Home: {
    fontFamily: "Source Sans Pro",
    display: "grid",
    gridTemplateColumns: "minmax(250px, 1fr) 3fr minmax(250px, 1fr)",
    backgroundColor: "#F3B924",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    paddingTop: "max(40px, 10vh)",
    fontSize: "3em",
    fontWeight: 600,
    margin: "0",
    minWidth: "150px",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "2em",
    margin: "0",
    maxWidth: "150px",
  },
  links: {
    paddingTop: "max(40px, 10vh)",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
  },
  link: {
    margin: "10px",
    fontSize: "2em",
    fontWeight: 400,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  anchor: {
    textDecoration: "none",
    color: "black",
  },
  "@media(max-width: 1200px)": {
    Home: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
    },
    title: {
      paddingTop: "20px",
    },
    subtitle: {
      maxWidth: "500px",
    },
    link: {
      textDecoration: "underline",
    },
    links: {
      flexDirection: "row",
      paddingTop: "20px",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
    <main className={classes.Home}>
      <div className={classes.header}>
        <Link to="/">
          <h1 className={classes.title}>SPARK</h1>
        </Link>
        <h2 className={classes.subtitle}> A Torch Mentorship Program</h2>
      </div>
      <div><Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Redirect to={"/404"}/>
      </Switch></div>
      <div className={classes.links}>
        <Link to="/about" className={classes.anchor}>
          <h3 className={classes.link}>About </h3>
        </Link>
        <Link to="/projects" className={classes.anchor}>
          <h3 className={classes.link}>Projects</h3>
        </Link>
        <Link to="/join" className={classes.anchor}>
          <h3 className={classes.link}>Join Us</h3>
        </Link>
      </div>
    </main>
    </Router>
  );
}


export default App;
