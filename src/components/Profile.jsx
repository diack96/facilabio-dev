import React, { useState } from 'react';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import {
  Container, TextField, Button, Typography, Box, Alert
} from '@mui/material';

export default function Profile() {
  const user = auth.currentUser;
  const [name, setName] = useState(user?.displayName || '');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      await updateProfile(user, { displayName: name });
      setMessage('Profil mis à jour avec succès.');
    } catch (error) {
      setMessage('Erreur lors de la mise à jour.');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Mon Profil</Typography>
      <Box sx={{ maxWidth: 400, mt: 2 }}>
        <TextField
          fullWidth
          label="Nom complet"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={user?.email || ''}
          disabled
          margin="normal"
        />
        <Button variant="contained" onClick={handleUpdate} sx={{ mt: 2 }}>
          Mettre à jour
        </Button>
        {message && <Alert sx={{ mt: 2 }} severity="info">{message}</Alert>}
      </Box>
    </Container>
  );
}
