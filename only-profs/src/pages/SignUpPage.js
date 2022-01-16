import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

export default function SignUpPage() {
  const [formParams, setFormParams] = React.useState({
    name: "",
    title: "",
    description: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e, field) => {
    console.log(e);
    switch (field) {
      case "email":
        setFormParams({ ...formParams, email: e.target.value });
        break;
      case "password":
        setFormParams({ ...formParams, password: e.target.value });
        break;
      case "name":
        setFormParams({ ...formParams, name: e.target.value });
        break;
      case "title":
        setFormParams({ ...formParams, title: e.target.value });
        break;
      case "description":
        setFormParams({ ...formParams, description: e.target.value });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formParams);
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
          <h2>Sign Up</h2>
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
        
      </Paper>
    </Grid>
  );
}
