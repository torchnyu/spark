import React from "react";
import { createUseStyles } from "react-jss";
import nickY from "./profiles/nickY.jpg";
import albertL from "./profiles/albertL.jpg";
import khanhng from "./profiles/khanhng.jpg";
import ethanP from "./profiles/ethanP.jpg";
import teoN from "./profiles/teoN.png";
import Mentor from "./Mentor";

const useStyles = createUseStyles({
  MentorsPage: {
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
  "@media(max-width: 1000px)": {
    MentorsPage: {
      margin: {
        top: "40px",
        bottom: "40px",
      },
    },
  },
});

const Mentors = {
  "Nicholas Yang": {
    description:
      "Student at NYU studying Mathematics and Computer Science. Interested in programming languages and compilers. Cloudflare Intern for Fall 2020.",
    githubURL: "https://github.com/NicholasLYang",
    image: nickY,
  },
  "Albert Liu": {
    description:
      "Senior at NYU who enjoys python scripting and long walks in Central Park. Majors in Computer Science. President of BUGS.",
    githubURL: "https://github.com/A1Liu",
    image: albertL,
  },
  "Ethan Printz": {
    description:
      "Junior at NYU. Member of Tisch Interactive Media Arts (ITP) and CAS Computer Science.",
    githubURL: "https://github.com/EthanPrintz",
    image: ethanP,
  },
  "Khanh Nguyen": {
    description:
      "Junior from Vietnam at NYU. Studying Computer Science. All-time favorite boyband is BROCKHAMPTON. Fueled by food and coding.",
    githubURL: "https://github.com/KN99HN",
    image: khanhng,
  },
  "Teo Nys": {
    description:
    "Senior at NYU. Majors in Computer Science. Minors in BioMolecular Science. Enjoys front-end development and designing.",
    githubURL: "https://github.com/nysteo",
    image: teoN,
  },
};

export default function MentorsPage() {
  const classes = useStyles();
  return (
    <div className={classes.MentorsPage}>
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
