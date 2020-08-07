import React from "react";
import { createUseStyles } from "react-jss";
import alberta from "./alberta.png";
import githubLogo from "./GitHub-Mark-32px.png";

const useStyles = createUseStyles({
  ProjectsPage: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gridGap: "20px",
    justifyItems: "stretch",
    margin: "20px",
  },
  Project: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "row nowrap",
    backgroundColor: "white",
    maxWidth: "400px",
    borderRadius: "3px 3px 3px 3px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    justifyContent: "flex-start",
    padding: "30px",
  },
  title: {
    position: "relative",
    top: "-20px",
    textAlign: "center",
    borderBottom: "1px solid rgb(117, 117, 116)",
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    margin: "0px 0px 10px 0px",
  },
  description: {
    position: "relative",
  },
  LinkContainer: {
    fontSize: "small",
    marginTop: "auto",
  },
  Footer: {
    boxSizing: "inherit",
    fontSize: "small",
    textAlign: "center",
  },
  Logo: {
    margin: "0px 5px 0px 0px",
    width: "24px",
  },
  link: {
    padding: "0 0 0 3px"
  },
  repoLink: {
    display: "flex",
    alignItems: "center"
  }
});

export default function ProjectsPage() {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <div className={classes.Project}>
        <h1 className={classes.title}>
          <a href="https://alberta.ml">
            Alberta.ml
          </a>
        </h1>
        <img src={alberta} className={classes.image} alt="project img"/>
        <p className={classes.description}>
          Alberta is a front-end project for
            <a href="https://github.com/BUGS-NYU/schedge" className={classes.link}>
              Schedge API
            </a>, automatically generating schedules for NYU CAS freshmen. We
          designed this project as a learning experience for new programmers to
          learn about front-end development as well as open source.
        </p>
        <div className={classes.LinkContainer}>
          <p className={classes.Footer}>
            <a className={classes.repoLink} href="https://github.com/BUGS-NYU/freshman-schedge-generator">
              <img src={githubLogo} className={classes.Logo} alt="github logo"/>
              github.com/BUGS-NYU/freshman-schedge-generator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
