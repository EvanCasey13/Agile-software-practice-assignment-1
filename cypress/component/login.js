import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../src/components/Login/Login.css'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  return (
    <div className="login">
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div" className="cardTitle">
          TMDB Client
        </Typography>
        <form className="form">
          <TextField type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" id="login-email" label="Email address" variant="standard" />
          <br />
          <TextField type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" id="login-password" label="Password" variant="standard" />
          <br />
          <Button className="login__btn"
            onClick={() => logInWithEmailAndPassword(email, password)} variant="outlined" id="login_button">Login</Button>
          <br />
          <Button className="login__btn login__google" onClick={signInWithGoogle} variant="outlined">Login with Google</Button>
          <br />
          <Typography variant="p" color="text.secondary" className="forgotPassword">
            Forgot Password
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary">
            Don't have an account? Register now.
          </Typography>
        </form>
      </Card>
    </div>
  );
}
export default Login;