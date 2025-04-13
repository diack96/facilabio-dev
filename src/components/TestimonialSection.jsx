import React from 'react';
import { Box, Typography, Button, Avatar, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const testimonial = {
  name: 'Fatou Ndiaye',
  role: 'Utilisatrice de Facilabio',
  message: "Depuis que j’utilise Facilabio, je ne perds plus mes analyses et je gagne en sérénité. L’accès est simple et sécurisé.",
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
};

export default function TestimonialSection() {
  return (
    <Box sx={{ py: 10, px: 2, bgcolor: '#fff' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ils nous font confiance
      </Typography>

      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
              src={testimonial.avatar}
              alt={testimonial.name}
              sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
            />
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
              “{testimonial.message}”
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonial.role}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Prêt à découvrir vos résultats en toute simplicité ?
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/signup"
          sx={{ mt: 2 }}
        >
          Créer un compte gratuitement
        </Button>
      </Box>
    </Box>
  );
}
