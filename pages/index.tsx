import Head from "next/head";
import { createUseStyles } from "react-jss";
import Link from "next/link";

const useStyles = createUseStyles({
  Home: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    backgroundColor: "#F3B924",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    paddingTop: "max(40px, 10vh)",
    fontSize: "3em",
    fontWeight: 600,
    margin: "0",
    width: "min(250px, 20vw)",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "2em",
    margin: "0",
    maxWidth: "250px",
  },
  squares: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  orangeSquare: {
    width: "min(60vw, 90vh)",
    height: "min(60vw, 90vh)",
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
    width: "min(40vw, 70vh)",
    height: "min(40vw, 70vh)",
    marginBottom: "3vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  redSquare: {
    width: "min(22vw, 52vh)",
    height: "min(22vw, 52vh)",
    backgroundColor: "#F0450F",
    marginBottom: "3vh",
  },
  links: {
    paddingTop: "max(40px, 10vh)",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
  },
  link: {
    margin: "10px",
    fontSize: "2em",
    fontWeight: 400,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "@media(max-width: 1000px)": {
    Home: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    header: {
      textAlign: "center",
    },
    title: {
      paddingTop: "20px",
    },
    subtitle: {
      maxWidth: "500px",
    },
    links: {
      flexDirection: "row",
      paddingTop: "20px",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className="container">
      <Head>
        <title>SPARK: A Torch Mentorship Program</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.Home}>
        <div className={classes.header}>
          <h1 className={classes.title}>SPARK</h1>
          <h2 className={classes.subtitle}> A Torch Mentorship Program</h2>
        </div>
        <div className={classes.squares}>
          <div className={classes.orangeSquare}>
            <div className={classes.darkOrangeSquare}>
              <div className={classes.redSquare} />
            </div>
          </div>
        </div>
        <div className={classes.links}>
          <Link href="/about">
            <h3 className={classes.link}>About </h3>
          </Link>
          <Link href="/projects">
            <h3 className={classes.link}>Projects</h3>
          </Link>
          <Link href="/join">
            <h3 className={classes.link}>Join Us</h3>
          </Link>
        </div>
      </main>

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
