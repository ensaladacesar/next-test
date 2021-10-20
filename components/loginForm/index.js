import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { login } from "../../services/userService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`valor de email ${email}`);
    console.log(`valor de password ${password}`);
  }, [email, password]);

  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const answer = await login(email, password);
    console.log(answer);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <form>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Login Form
          </Typography>
          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={handleEmailValue}
              />
              <FormHelperText id="my-helper-text">
                <p>We will never share your email.</p>
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="my-input">Password</InputLabel>
              <Input
                id="my-input"
                type="password"
                aria-describedby="my-helper-text"
                onChange={handlePasswordValue}
              />
            </FormControl>
          </div>
        </CardContent>
        <CardActions>
          <Button onClick={handleLogin}>Login</Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default LoginForm;
