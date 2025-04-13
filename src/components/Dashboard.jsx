import React from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';

export default function Dashboard() {
  // Simuler des données d’analyses pour l’exemple
  const analyses = [
    { id: 1, titre: 'Analyse sanguine', date: '2024-04-01', resultat: 'Normal' },
    { id: 2, titre: 'Test urinaire', date: '2024-03-25', resultat: 'Anomalie' },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Mes Analyses</Typography>
      <Grid container spacing={2}>
        {analyses.map((a) => (
          <Grid item xs={12} sm={6} key={a.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{a.titre}</Typography>
                <Typography>Date : {a.date}</Typography>
                <Typography>Résultat : {a.resultat}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
