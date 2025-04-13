import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: { xs: 8, md: 10 },
        px: 2,
        textAlign: 'center',
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
        margin="auto"
      >
        {/* Texte à gauche */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Vos analyses médicales, accessibles en un clic.
            </Typography>
            <Typography variant="h6" component="p" sx={{ mb: 4 }}>
              Facilabio vous connecte à votre santé, en toute simplicité.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/signup"
              sx={{ mr: 2, backgroundColor: '#fff', color: 'primary.main' }}
            >
              Créer un compte
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/dashboard"
              sx={{ color: '#fff', borderColor: '#fff' }}
            >
              Accéder au dashboard
            </Button>
          </motion.div>
        </Grid>

        {/* Image ou animation à droite */}
        <Grid item xs={12} md={6}>
          <motion.img
            src=".\facilabion-logo-blanc.png" // mets une vraie image ou animation ici
            alt="Animation Facilabio"
            style={{ maxWidth: '100%', height: 'auto' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
