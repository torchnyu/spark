import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  AboutPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  content: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    maxWidth: "400px",
    padding: {
      left: "40px",
      right: "40px",
      bottom: "40px",
      top: "20px",
    },
    margin: {
      top: "8vh",
      bottom: "3vh",
    },
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "left",
  },
  paragraph: {
    textAlign: "left",
    fontSize: "1.1em",
    lineHeight: "1.3em",
    maxWidth: "min(400px, 35vw)",
  },
  "@media(max-width: 1000px)": {
    content: {
      margin: {
        top: "40px",
        bottom: "40px",
      },
    },
  },
});

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div className={classes.AboutPage}>
      <div className={classes.content}>
        <h1 className={classes.title}> About </h1>
        <p className={classes.paragraph}>
          Spark is a mentorship program run by TorchNYU, an organization
          dedicated towards improving NYU CS, and BUGS, NYU's open source
          development club.
        </p>
        <p className={classes.paragraph}>
          We teach students practical and pragmatic software development through
          working on and shipping projects.
        </p>
        <p className={classes.paragraph}>
          Some of the technologies we use include React, JavaScript, JSS and
          many others
        </p>
      </div>
    </div>
  );
}
