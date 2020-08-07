import React, {useState} from "react"
import {createUseStyles} from "react-jss";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import {Button} from "@material-ui/core";

const useStyles = createUseStyles({
  JoinUsPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: {
      top: "10vh"
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "400px"
  },
  error: {
    color: "#A30000",
    padding: "10px"
  },
  message: {
    color: "#005700",
    padding: "10px"
  }
});

const API_URL = "https://ywhk4gbxs1.execute-api.us-east-1.amazonaws.com/Prod/email";

const JoinUsPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [github, setGitHub] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (email === "" || name === "") {
      setError("Email and name cannot be empty");
      return;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setError("Email must be valid");
      return;
    }
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({name, email, github})
      });
      setError("");
      setMessage("Successfully submitted. We'll be in touch")
    } catch (e) {
      console.error(e);
      setError("Failed to submit. Try again?")
    }
  }
  return <div className={classes.JoinUsPage}>
    <h1> Join Us </h1>
    <form onSubmit={handleSubmit} className={classes.form}>
      <p>
        We're happy that you're interested in joining us! Please fill out the following form
        and we'll be in touch
      </p>
      <Box m={1}><TextField value={email} onChange={e => setEmail(e.currentTarget.value)} label="Email" variant="outlined" /></Box>
      <Box m={1}><TextField value={name} onChange={e => setName(e.currentTarget.value)} label="Name" variant="outlined" /></Box>
      <p>
        If you have a GitHub account, please provide your username so
        that we can add you to the Torch organization
      </p>
      <Box m={1}><TextField value={github} onChange={e => setGitHub(e.currentTarget.value)} label="GitHub (optional)" variant="outlined" /></Box>
      {error !== "" && <div className={classes.error}> {error} </div>}
      {message !== "" && <div className={classes.message}> {message} </div>}
      <Box m={1}>
        <Button variant="contained" color="primary" type="submit"> Submit </Button>
      </Box>
    </form>
  </div>
}

export default JoinUsPage;