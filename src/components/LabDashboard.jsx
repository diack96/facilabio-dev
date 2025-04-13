import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Grid, Paper, MenuItem
} from '@mui/material';

const patients = [
  { id: 'p1', name: 'Fatou Ndiaye' },
  { id: 'p2', name: 'Alioune Diop' },
];

const testTypes = [
  { value: 'hematurie', label: 'Hématurie' },
  { value: 'serologie', label: 'Sérologie' },
];

export default function LabDashboard() {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [testType, setTestType] = useState('');
  const [resultData, setResultData] = useState({
    erythrocytes: '',
    leucocytes: '',
    interpretation: '',
  });

  const handleSubmit = () => {
    console.log('Analyse envoyée :', { selectedPatient, testType, resultData });
    alert('Résultat envoyé avec succès !');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Tableau de bord Laboratoire
      </Typography>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Remplir une nouvelle analyse
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Patient"
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              required
            >
              {patients.map((p) => (
                <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              label="Type d'analyse"
              value={testType}
              onChange={(e) => setTestType(e.target.value)}
              required
            >
              {testTypes.map((t) => (
                <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
              ))}
            </TextField>
          </Grid>

          {testType === 'hematurie' && (
            <>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Érythrocytes (par µL)"
                  value={resultData.erythrocytes}
                  onChange={(e) => setResultData({ ...resultData, erythrocytes: e.target.value })}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Leucocytes"
                  value={resultData.leucocytes}
                  onChange={(e) => setResultData({ ...resultData, leucocytes: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Interprétation"
                  value={resultData.interpretation}
                  onChange={(e) => setResultData({ ...resultData, interpretation: e.target.value })}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleSubmit}
          disabled={!selectedPatient || !testType}
        >
          Envoyer les résultats
        </Button>
      </Paper>
    </Box>
  );
}
