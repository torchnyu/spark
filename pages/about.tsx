import { createUseStyles } from "react-jss";
import Head from "next/head";

const useStyles = createUseStyles({
  About: {
    backgroundColor: "#F3B924",
    height: "100vh",
  },
});
export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>About | SPARK: A Torch Mentorship Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.About}>
        <h1> About </h1>
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
      </main>
    </div>
  );
}
