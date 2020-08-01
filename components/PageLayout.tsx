import Link from "next/link";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  Home: {
    display: "grid",
    gridTemplateColumns: "minmax(250px, 1fr) 3fr minmax(250px, 1fr)",
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
    minWidth: "150px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "2em",
    margin: "0",
    maxWidth: "150px",
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
  "@media(max-width: 1200px)": {
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
    link: {
      textDecoration: "underline",
    },
    links: {
      flexDirection: "row",
      paddingTop: "20px",
    },
  },
});

export default function PageLayout({ children }) {
  const classes = useStyles();
  return (
    <main className={classes.Home}>
      <div className={classes.header}>
        <Link href="/">
          <h1 className={classes.title}>SPARK</h1>
        </Link>
        <h2 className={classes.subtitle}> A Torch Mentorship Program</h2>
      </div>
      <div>{children}</div>
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
  );
}
