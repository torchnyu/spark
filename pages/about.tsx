import { createUseStyles } from "react-jss";
import Head from "next/head";
import PageLayout from "../components/PageLayout";

const useStyles = createUseStyles({
  About: {
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
    backgroundColor: "#F66717",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5em",
    fontWeight: 400,
  },
  paragraph: {
    fontSize: "1.1em",
    lineHeight: "1.3em",
    maxWidth: "600px",
  },
});
export default function About() {
  const classes = useStyles();
  return (
    <div className="container">
      <Head>
        <title>About | SPARK: A Torch Mentorship Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className={classes.About}>
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
      </PageLayout>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
