import React from 'react';
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/facilabio-logo-blanc.png'; // Assure-toi que ce fichier existe

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="Facilabio" style={{ height: 100, marginRight: 10 }} />
          
        </Box>
        <Button color="inherit" component={Link} to="/">Accueil</Button>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/profile">Profil</Button>
        <Button color="inherit" component={Link} to="/lab">Labo</Button>
      </Toolbar>
    </AppBar>
  );
}
