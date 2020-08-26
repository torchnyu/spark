import React from "react";
import { createUseStyles } from "react-jss";
import githubLogo from "./GitHub-Mark-32px.png";

const useStyles = createUseStyles({
  Mentor: {
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
});

interface props {
  name: string;
  image: string;
  githubURL: string;
  description: string;
}

const Mentor = ({ name, image, githubURL, description }: props) => {
  const classes = useStyles();
  return (
    <div className={classes.Mentor}>
      <h1 className={classes.title}>{name}</h1>
      <img src={image} className={classes.image} alt="project img" />
      <p className={classes.description}>{description}</p>
      <div className={classes.LinkContainer}>
        <p className={classes.Footer}>
          <a className={classes.repoLink} href={githubURL}>
            <img src={githubLogo} className={classes.Logo} alt="github logo" />
            {githubURL}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Mentor;
