import React from "react";
import * as func from "../back-end/functions";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

export default function LoginPage() {
  const [formParams, setFormParams] = React.useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e, field) => {
    switch (field) {
      case "email":
        setFormParams({ ...formParams, email: e.target.value });
        break;
      case "password":
        setFormParams({ ...formParams, password: e.target.value });
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await func.signIn(formParams.email, formParams.password);
    if (!user) {
        console.log("Login Failed! Check Credentials!")
    } else {
        console.log("Login Successful")
    }
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Log In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => onHandleChange(e, "email")}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            onChange={(e) => onHandleChange(e, "password")}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
        </form>
        <Typography>
          {" "}
          Don't have an account yet?
          <Link href="#"> Sign Up</Link>
        </Typography>
        
      </Paper>
    </Grid>
  );
}
