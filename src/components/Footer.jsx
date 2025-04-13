import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Facilabio</Typography>
            <Typography variant="body2">
              Votre plateforme de gestion des résultats médicaux, sécurisée et accessible.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Liens utiles</Typography>
            <Link href="/signup" color="inherit" underline="hover" display="block">Créer un compte</Link>
            <Link href="/dashboard" color="inherit" underline="hover" display="block">Voir mes résultats</Link>
            <Link href="/lab" color="inherit" underline="hover" display="block">Espace laboratoire</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Contact</Typography>
            <Typography variant="body2">Email : contact@facilabio.com</Typography>
            <Typography variant="body2">Téléphone : +221 77 123 45 67</Typography>
            <Typography variant="body2">Dakar, Sénégal</Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Facilabio. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
