import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSecion';
import WhyFacilabio from './WhyFacilabio';
import TestimonialSection from './TestimonialSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyFacilabio />
      <TestimonialSection />
    </>
  );
}

