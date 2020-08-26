import React from "react";
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import { createUseStyles } from "react-jss";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";
import ProjectsPage from "./ProjectsPage";
import JoinUsPage from "./JoinUsPage";
import MentorsPage from "./MentorsPage";

const useStyles = createUseStyles({
  "@keyframes scalein": {
    from: {
      transform: "scale(0.8)",
    },
    to: {
      transform: "scale(1)",
    },
  },
  App: {
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
    animation: "$scalein 1s",
  },
  title: {
    margin: {
      top: "max(40px, 10vh)",
      left: "0",
      bottom: "0",
    },
    fontSize: "3em",
    fontWeight: 600,
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
    marginTop: "max(40px, 10vh)",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
    animation: "$scalein 1s",
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
  activeLink: {
    fontWeight: 700,
  },
  "@media(max-width: 1000px)": {
    App: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
      margin: "0",
    },
    title: {
      marginTop: "20px",
    },
    subtitle: {
      maxWidth: "500px",
    },
    link: {
      textDecoration: "underline",
      margin: "7px",
    },
    links: {
      margin: {
        top: "0",
        bottom: "40px",
      },
      padding: {
        left: "0",
      },
      flexDirection: "row",
      fontSize: "0.7rem",
    },
  },
});

function App() {
  const location = useLocation();
  function styleLink(path: string) {
    return location.pathname === path ? { fontWeight: 700 } : {};
  }
  const classes = useStyles();
  return (
    <main className={classes.App}>
      <div className={classes.header}>
        <Link to="/">
          <h1 className={classes.title}>SPARK</h1>
        </Link>
        <h2 className={classes.subtitle}> A Torch Mentorship Program</h2>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/mentors">
            <MentorsPage />
          </Route>
          <Route path="/join">
            <JoinUsPage />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Redirect to={"/404"} />
        </Switch>
      </div>
      <div className={classes.links}>
        <Link to="/about" className={classes.anchor}>
          <h3 style={styleLink("/about")} className={classes.link}>
            About{" "}
          </h3>
        </Link>
        <Link to="/projects" className={classes.anchor}>
          <h3 style={styleLink("/projects")} className={classes.link}>
            Projects
          </h3>
        </Link>
        <Link to="/mentors" className={classes.anchor}>
          <h3 style={styleLink("/mentors")} className={classes.link}>
            Mentors
          </h3>
        </Link>
        <Link to="/join" className={classes.anchor}>
          <h3 style={styleLink("/join")} className={classes.link}>
            Join Us
          </h3>
        </Link>
      </div>
    </main>
  );
}

export default App;
