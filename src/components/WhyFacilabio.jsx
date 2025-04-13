import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { FaLock, FaLaptopMedical, FaGlobe, FaUserMd } from 'react-icons/fa';

const features = [
  {
    icon: <FaLaptopMedical size={40} color="#1976d2" />,
    title: 'Suivi numérique simplifié',
    text: "Consultez vos résultats médicaux où que vous soyez, sans papier ni délai.",
  },
  {
    icon: <FaLock size={40} color="#1976d2" />,
    title: 'Sécurité renforcée',
    text: "Vos données sont chiffrées et sécurisées grâce à Firebase.",
  },
  {
    icon: <FaGlobe size={40} color="#1976d2" />,
    title: 'Accessible partout',
    text: "Depuis votre téléphone, tablette ou ordinateur, sans téléchargement.",
  },
  {
    icon: <FaUserMd size={40} color="#1976d2" />,
    title: 'Connecté aux laboratoires',
    text: "Les résultats sont envoyés directement par vos professionnels de santé.",
  },
];

export default function WhyFacilabio() {
  return (
    <Box sx={{ py: 8, px: 2, bgcolor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pourquoi choisir Facilabio ?
      </Typography>
      <Grid container spacing={4} maxWidth="lg" margin="auto">
        {features.map((f, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }} elevation={3}>
              <div>{f.icon}</div>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>{f.title}</Typography>
              <Typography variant="body2" color="text.secondary">{f.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
