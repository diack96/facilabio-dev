import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Grid, Paper, Divider, MenuItem
} from '@mui/material';

const labs = [
  { id: 'lab1', name: 'BioLab Médical' },
  { id: 'lab2', name: 'Institut Pasteur' },
];

const patients = {
  lab1: [
    { id: 'p1', name: 'Fatou Ndiaye' },
    { id: 'p2', name: 'Alioune Diop' },
  ],
  lab2: [
    { id: 'p3', name: 'Aminata Sy' },
    { id: 'p4', name: 'Cheikh Sow' },
  ],
};

const groups = {
  Hematologie: [
    { name: 'Hémoglobine', unit: 'g/dL', norme: '13-17 (H)', key: 'hemoglobine' },
    { name: 'Hématocrite', unit: '%', norme: '40-52%', key: 'hematocrite' },
  ],
  Biochimie: [
    { name: 'Créatinine', unit: 'mg/L', norme: '6 – 12', key: 'creatinine' },
    { name: 'Glycémie', unit: 'g/L', norme: '0.7 – 1.1', key: 'glycemie' },
  ]
};

export default function MultiAnalysisDynamic() {
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('');
  const [results, setResults] = useState({});

  const handleChange = (key, value) => {
    setResults({ ...results, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Lab:', selectedLab, 'Patient:', selectedPatient, 'Results:', results);
    alert('Résultats enregistrés avec succès !');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Résultats médicaux - Interface Laboratoire
      </Typography>

      <Paper sx={{ p: 4, mt: 2 }} elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Sélectionner le laboratoire"
              fullWidth
              value={selectedLab}
              onChange={(e) => {
                setSelectedLab(e.target.value);
                setSelectedPatient('');
              }}
            >
              {labs.map((lab) => (
                <MenuItem key={lab.id} value={lab.id}>{lab.name}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Sélectionner un patient"
              fullWidth
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              disabled={!selectedLab}
            >
              {(patients[selectedLab] || []).map((patient) => (
                <MenuItem key={patient.id} value={patient.id}>{patient.name}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      {selectedPatient && (
        <>
          {Object.entries(groups).map(([groupName, analyses]) => (
            <Paper key={groupName} sx={{ p: 4, mt: 4 }} elevation={3}>
              <Typography variant="h6" gutterBottom>{groupName}</Typography>
              <Grid container spacing={2}>
                {analyses.map(({ name, unit, norme, key }) => (
                  <React.Fragment key={key}>
                    <Grid item xs={12} sm={4}>
                      <Typography>{name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        label={`Résultat (${unit})`}
                        value={results[key] || ''}
                        onChange={(e) => handleChange(key, e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography color="text.secondary">Norme : {norme}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Paper>
          ))}

          <Box textAlign="center" sx={{ mt: 5 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Enregistrer les résultats
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
