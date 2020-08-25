import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

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

const API_URL =
  "https://ywhk4gbxs1.execute-api.us-east-1.amazonaws.com/Prod/email";

const JoinUsPage = () => {
  const classes = useStyles();
  /*const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("mentee");
  const [github, setGitHub] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (email === "" || name === "") {
      setError("Email and name cannot be empty");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Email must be valid");
      return;
    }
    try {
      setIsSubmitting(true);
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ name, email, github, role }),
      });
      setError("");
      setMessage("Successfully submitted. We'll be in touch");
    } catch (e) {
      console.error(e);
      setError("Failed to submit. Try again?");
    }
    setIsSubmitting(false);
  }*/
  return (
    <div className={classes.JoinUsPage}>
      <div className={classes.container}>
        <h1> Join Us </h1>
        <p>
          We're happy that you're interested in joining us! Please email
          nick@nicholasyang.com for more details
        </p>
        {/*<form onSubmit={handleSubmit} className={classes.form}>
      <p>
        We're happy that you're interested in joining us! Please fill out the following form
        and we'll be in touch
      </p>
      <Box m={1}><TextField disabled={isSubmitting} value={email} onChange={e => setEmail(e.currentTarget.value)} label="Email" variant="outlined" /></Box>
      <Box m={1}><TextField disabled={isSubmitting} value={name} onChange={e => setName(e.currentTarget.value)} label="Name" variant="outlined" /></Box>
      <p>
        Mentor or mentee?
      </p>
      <Box m={1}>
        <FormControl variant="outlined">
          <Select disabled={isSubmitting} value={role} onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value as string)
          }}>
            <MenuItem value={"mentee"}> Mentee </MenuItem>
            <MenuItem value={"mentor"}> Mentor </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <p>
        If you have a GitHub account, please provide your username so
        that we can add you to the Torch organization
      </p>
      <Box m={1}><TextField disabled={isSubmitting} value={github} onChange={e => setGitHub(e.currentTarget.value)} label="GitHub (optional)" variant="outlined" /></Box>
      {error !== "" && <div className={classes.error}> {error} </div>}
      {message !== "" && <div className={classes.message}> {message} </div>}
      <Box m={1}>
        <Button disabled={isSubmitting} variant="contained" color="primary" type="submit"> Submit </Button>
      </Box>
    </form>*/}
      </div>
    </div>
  );
};

export default JoinUsPage;
