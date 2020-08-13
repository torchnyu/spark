import React from "react";
import { createUseStyles } from "react-jss";
import nickY from "./profiles/nickY.jpg";
import albertL from "./profiles/albertL.jpg";
import khanhng from "./profiles/khanhng.jpg";
import ethanP from "./profiles/ethanP.jpg";
import githubLogo from "./GitHub-Mark-32px.png";

const useStyles = createUseStyles({
  MentorPage: {
    display: "grid",
    marginTop: "8vh",
    placeItems: "center",
    margin: "20px",
  },
  mentorInfo: {
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "2px 3px 18px -6px rgba(0,0,0,0.75)",
    padding: "40px",
    margin: "40px",
  },
  infoParagraph: {
    maxWidth: "400px",
  },
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
  "@media(max-width: 1000px)": {
    ProjectsPage: {
      margin: {
        top: "40px",
        bottom: "40px",
      },
    },
  },
});

interface props {
  name: string;
  image: string;
  githubURL: string;
  description: string;
}

const Mentors = {
  "Nicholas Yang": {
    description:
      "Student at NYU studying Mathematics and Computer Science. Interested in programming languages and compilers. Cloudflare Intern for Fall 2020",
    githubURL: "https://github.com/NicholasLYang",
    image: nickY,
  },
  "Albert Liu": {
    description:
      "Albert enjoys python scripting and long walks in Central Park. In his work time he majors in Computer Science at CAS.",
    githubURL: "https://github.com/A1Liu",
    image: albertL,
  },
  "Ethan Printz": {
    description:
      "Junior at New York University || Tisch Interactive Media Arts (ITP) and CAS Computer Science",
    githubURL: "https://github.com/EthanPrintz",
    image: ethanP,
  },
  "Khanh Nguyen": {
    description:
      "Sophomore from Vietnam studying Computer Science. BROCKHAMPTON is my all-time favorite boyband. Food and coding fuels my existence",
    githubURL: "https://github.com/KN99HN",
    image: khanhng,
  },
};

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

export default function MentorPage() {
  const classes = useStyles();
  return (
    <div className={classes.MentorPage}>
      <div className={classes.mentorInfo}>
        <h1> Mentors </h1>
        <p className={classes.infoParagraph}>
          Spark was born out of a chaotic summer of 2020 during the global
          pandemic. It was originally organized by Nicholas Yang, Albert Liu,
          Khanh Nguyen and Ethan Printz. Here are our current mentors and their
          bios.
        </p>
      </div>
      {Object.entries(Mentors).map(([name, value]) => {
        return (
          <Mentor
            name={name}
            image={value.image}
            githubURL={value.githubURL}
            description={value.description}
          />
        );
      })}
    </div>
  );
}
