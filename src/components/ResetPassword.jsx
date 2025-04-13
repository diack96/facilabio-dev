import React, { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';
import {
  Container, Box, TextField, Button, Typography, Alert, Link as MuiLink
} from '@mui/material';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Email de réinitialisation envoyé.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: '#fff' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Réinitialiser le mot de passe
        </Typography>
        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <Box component="form" onSubmit={handleReset} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Envoyer
          </Button>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <MuiLink component={Link} to="/">Retour à la connexion</MuiLink>
        </Box>
      </Box>
    </Container>
  );
}
