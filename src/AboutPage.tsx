import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  AboutPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  orangeSquare: {
    width: "45vw",
    height: "45vw",
    margin: {
      top: "8vh",
      bottom: "4vh",
    },
//    backgroundColor: "#F66717",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5em",
    fontWeight: 400,
    textAlign: "left",
    width: "80%"
  },
  paragraph: {
    textAlign: "left",
    fontSize: "1.1em",
    lineHeight: "1.3em",
    maxWidth: "min(600px, 35vw)",
  },
});

export default function AboutPage() {
  const classes = useStyles();
  return (
        <div className={classes.AboutPage}>
          <div className={classes.orangeSquare}>
            <h1 className={classes.title}> About </h1>
            <p className={classes.paragraph}>
              Spark is a mentorship program run by TorchNYU, an organization
              dedicated towards improving NYU CS, and BUGS, NYU's open source
              development club.
            </p>
            <p className={classes.paragraph}>
              We teach students practical and pragmatic software development
              through working on and shipping projects.
            </p>
            <p className={classes.paragraph}>
              Some of the technologies we use include React, JavaScript, JSS and
              many others
            </p>
          </div>
        </div>
  );
}
