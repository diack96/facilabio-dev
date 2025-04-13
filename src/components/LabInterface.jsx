import React, { useState } from 'react';
import {
  Container, Typography, TextField, Button, Box, Alert
} from '@mui/material';

export default function LabInterface() {
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');

  const handleSendResult = () => {
    // Simuler l’envoi
    if (userId && result) {
      setMessage('Résultat envoyé avec succès.');
      setUserId('');
      setResult('');
    } else {
      setMessage('Veuillez remplir tous les champs.');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Interface Laboratoire</Typography>
      <Box sx={{ maxWidth: 500, mt: 2 }}>
        <TextField
          fullWidth
          label="ID de l'utilisateur"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Résultat de l’analyse"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSendResult} sx={{ mt: 2 }}>
          Envoyer le résultat
        </Button>
        {message && <Alert sx={{ mt: 2 }} severity="success">{message}</Alert>}
      </Box>
    </Container>
  );
}
