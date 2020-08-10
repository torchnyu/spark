import React from "react"
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  HomePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  '@media(max-width: 1000px)': {
    orangeSquare: {
      width: "70vw",
      height: "70vw"
    },
    darkOrangeSquare: {
      width: "52vw",
      height: "52vw"
    },
    redSquare: {
      width: "35vw",
      height: "35vw"
    }
  }
});

export default function HomePage() {
  const classes = useStyles();
  return (
        <div className={classes.HomePage}>
          <div className={classes.orangeSquare}>
            <div className={classes.darkOrangeSquare}>
              <div className={classes.redSquare} />
            </div>
          </div>
        </div>
  );
}
