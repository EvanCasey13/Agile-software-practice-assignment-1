import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../src/firebase";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../src/components/Register/Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <div className="register">
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div" className="cardTitle">
          TMDB Client
        </Typography>
        <form className="form">
          <TextField type="text"
            className="register__textBox"
            id="registration-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            variant="standard" />
          <br />
          <TextField type="text"
            className="register__textBox"
            id="registration-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            variant="standard" />
          <br />
          <TextField type="password"
            className="register__textBox"
            id="registration-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            variant="standard" />
          <br />
          <Button className="register__btn" id="register_movie_app_button" onClick={register} variant="outlined">Register</Button>
          <br />
          <Button className="register__btn register__google"
            onClick={signInWithGoogle} variant="outlined">Register with Google</Button>
          <br />
          <Typography variant="p" color="text.secondary">
            Already have an account? Login now.
          </Typography>
        </form>
      </Card>
    </div>
  );
}
export default Register;