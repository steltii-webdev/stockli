import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { auth } from '../../firebase/firebaseConfig';
import { Google } from '@mui/icons-material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignupWithEmailAndPassword = () => {
    setError(''); // Clear any previous error messages

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-up error
        setError(error.message); // Display error message to the user
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in with Google
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Signup
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSignupWithEmailAndPassword}>
              Sign up
            </Button>
            <Typography variant="h6" gutterBottom>
              Use oauth instead?
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoogleSignIn}>
              <Google /> Sign up with Google
            </Button>
            <Typography variant="h6" gutterBottom>
              Already have and account? 
            </Typography>
          <Button variant="contained" color="primary" component={Link} to="/login">
            Login
          </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
