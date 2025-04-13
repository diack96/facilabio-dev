import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          py: 4,
          minHeight: 'calc(100vh - 130px)', // ajuste selon la taille de ta navbar + footer
          bgcolor: '#f5f5f5'
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
      <Footer />
    </>
  );
}
