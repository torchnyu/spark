import React from "react";
import { createUseStyles } from "react-jss";
import alberta from "./alberta.png";
import githubLogo from "./GitHub-Mark-32px.png";

const useStyles = createUseStyles({
  ProjectsPage: {
    display: "grid",
    marginTop: "8vh",
    placeItems: "center",
    margin: "20px",
  },
  projectsInfo: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    padding: "40px",
    margin: "40px",
  },
  infoParagraph: {
    maxWidth: "400px",
  },
  Project: {
    display: "flex",
    flexDirection: "column",
    flexFlow: "row nowrap",
    backgroundColor: "white",
    maxWidth: "400px",
    borderRadius: "5px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    justifyContent: "flex-start",
    padding: "30px",
    margin: "10px",
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
    textAlign: "center",
  },
  LinkContainer: {
    fontSize: "small",
    marginTop: "auto",
  },
  Footer: {
    boxSizing: "inherit",
    fontSize: "small",
    display: "flex",
    justifyContent: "center",
  },
  Logo: {
    margin: "0px 8px 0px 0px",
    width: "24px",
  },
  link: {
    padding: "0 0 0 3px",
  },
  repoLink: {
    display: "flex",
    alignItems: "center",
  },
  "@media(max-width: 1000px)": {
    ProjectsPage: {
      margin: {
        top: "40px",
        bottom: "40px",
      },
    },
  },
});

export default function ProjectsPage() {
  const classes = useStyles();
  return (
    <div className={classes.ProjectsPage}>
      <div className={classes.projectsInfo}>
        <h1> Projects </h1>
        <p className={classes.infoParagraph}>
          All projects are designed, implemented and deployed by Torch mentees.
          Mentors advise, but do not work on the projects themselves.
        </p>
      </div>
      <div className={classes.Project}>
        <h1 className={classes.title}>
          <a href="https://bugs-nyu.github.io/freshman-schedge-generator/" target="blank">Alberta</a>
        </h1>
        <img src={alberta} className={classes.image} alt="project img" />
        <p className={classes.description}>
          Alberta is a front-end project for the
          <a
            href="https://github.com/BUGS-NYU/schedge"
            className={classes.link}
          >
            Schedge API
          </a>
          . It automatically generates schedules for NYU CAS freshmen. We
          designed this project for new programmers to learn about front-end as
          well as open source development.
        </p>
        <div className={classes.LinkContainer}>
          <p className={classes.Footer}>
            <a
              className={classes.repoLink}
              href="https://github.com/BUGS-NYU/freshman-schedge-generator"
              target="blank"
            >
              <img
                src={githubLogo}
                className={classes.Logo}
                alt="github logo"
              />
              github.com/BUGS-NYU/freshman-schedge-generator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
