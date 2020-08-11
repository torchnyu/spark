import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@keyframes fadein": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  HomePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "'$fadein' 2s",
  },
  orangeSquare: {
    width: "45vw",
    height: "45vw",
    backgroundColor: "#F66717",
    margin: {
      top: "8vh",
      bottom: "3vh",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  darkOrangeSquare: {
    backgroundColor: "#E05A0F",
    width: "35vw",
    height: "35vw",
    marginBottom: "3vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  redSquare: {
    width: "25vw",
    height: "25vw",
    backgroundColor: "#F0450F",
    marginBottom: "3vh",
  },
  redRectangle: {
    width: "55vw",
    height: "10vw",
    backgroundColor: "#FF4B3E",
    marginBottom: "3vh",
    marginTop: "10vh",
  },
  blueRectangle: {
    width: "55vw",
    height: "10vw",
    backgroundColor: "#197278",
    marginBottom: "3vh",
  },
  greenRectangle: {
    width: "55vw",
    height: "10vw",
    backgroundColor: "#74A4BC",
    marginBottom: "3vh",
  },
  "@media(max-width: 1000px)": {
    orangeSquare: {
      width: "70vw",
      height: "70vw",
    },
    darkOrangeSquare: {
      width: "52vw",
      height: "52vw",
    },
    redSquare: {
      width: "35vw",
      height: "35vw",
    },
  },
});

export default function HomePage() {
  const classes = useStyles();

  const randNumber = Math.floor(Math.random() * 2 + 1);
  return (
    <div className={classes.HomePage}>
      {randNumber % 2 === 0 ? (
        <div>
          <div className={classes.redRectangle} />
          <div className={classes.greenRectangle} />
          <div className={classes.blueRectangle} />
        </div>
      ) : (
        <div className={classes.orangeSquare}>
          <div className={classes.darkOrangeSquare}>
            <div className={classes.redSquare} />
          </div>
        </div>
      )}
    </div>
  );
}
