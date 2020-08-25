import React  from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  JoinUsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: {
      top: "10vh",
    },
  },
  container: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    padding: "40px",
    maxWidth: "500px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "400px",
  },
  error: {
    color: "#A30000",
    padding: "10px",
  },
  message: {
    color: "#005700",
    padding: "10px",
  },
  "@media(max-width: 1000px)": {
    JoinUsPage: {
      maxWidth: "80vw",
      margin: {
        top: "40px",
        bottom: "40px",
      },
    },
  },
});


const JoinUsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.JoinUsPage}>
      <div className={classes.container}>
        <h1> Join Us </h1>
        <p>
          We're happy that you're interested in joining us! Please fill out
          <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdKjX0bLjmz9c_2X4NrZKbmZ1hTkfDs3QYO4ycYBrSY19-gRA/viewform?usp=sf_link"}> this form </a> and we'll be in touch
        </p>
      </div>
    </div>
  );
};

export default JoinUsPage;
