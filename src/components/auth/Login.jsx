import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { auth } from '../../firebase/firebaseConfig'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError(''); // Clear any previous error messages

    auth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        // Redirect to the dashboard or other pages as needed
      })
      .catch((error) => {
        // Handle login error
        setError('Invalid email or password.'); // Display error message to the user
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Login
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
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Log In
          </Button>
          <Button variant="contained" color="primary" component={ Link } to="/signup" >
            Signup
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
