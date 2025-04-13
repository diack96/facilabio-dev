import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Grid, Paper, Divider
} from '@mui/material';

const groups = {
  Hematologie: [
    { name: 'Hémoglobine', unit: 'g/dL', norme: '13-17 (H)', key: 'hemoglobine' },
    { name: 'Hématocrite', unit: '%', norme: '40-52%', key: 'hematocrite' },
    { name: 'Leucocytes', unit: '/mm³', norme: '4 000 – 10 000', key: 'leucocytes' },
    { name: 'Plaquettes', unit: '/mm³', norme: '150 000 – 400 000', key: 'plaquettes' },
    { name: 'Vitesse de sédimentation', unit: 'mm/h', norme: '< 10', key: 'vitesse_sedimentation' },
  ],
  Biochimie: [
    { name: 'Créatinine', unit: 'mg/L', norme: '6 – 12', key: 'creatinine' },
    { name: 'Urée', unit: 'g/L', norme: '0.15 – 0.45', key: 'uree' },
    { name: 'Glycémie', unit: 'g/L', norme: '0.7 – 1.1', key: 'glycemie' },
    { name: 'Transaminases ASAT', unit: 'UI/L', norme: '< 35', key: 'asat' },
    { name: 'Transaminases ALAT', unit: 'UI/L', norme: '< 45', key: 'alat' },
  ],
  Serologie: [
    { name: 'HIV', unit: '', norme: 'Négatif', key: 'hiv' },
    { name: 'Hépatite B', unit: '', norme: 'Négatif', key: 'hepatite_b' },
    { name: 'Hépatite C', unit: '', norme: 'Négatif', key: 'hepatite_c' },
    { name: 'TPHA', unit: '', norme: 'Négatif', key: 'tpha' },
    { name: 'VDRL', unit: '', norme: 'Négatif', key: 'vdrl' },
  ],
  Urinaire: [
    { name: 'Protéinurie', unit: 'mg/24h', norme: '< 150', key: 'proteinurie' },
    { name: 'Érythrocytes', unit: '/µL', norme: '< 10', key: 'erythrocytes' },
    { name: 'Leucocytes', unit: '/µL', norme: '< 10', key: 'leucocytes_urine' },
    { name: 'Nitrites', unit: '', norme: 'Négatif', key: 'nitrites' },
    { name: 'Glucose urinaire', unit: '', norme: 'Négatif', key: 'glucose_urine' },
  ],
};

export default function MultiAnalysisLabForm() {
  const [results, setResults] = useState({});

  const handleChange = (key, value) => {
    setResults({ ...results, [key]: value });
  };

  const handleSubmit = () => {
    console.log('Résultats complets du patient :', results);
    alert('Tous les résultats ont été envoyés avec succès !');
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Entrée des résultats - Interface Laboratoire
      </Typography>

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
        <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
          Envoyer tous les résultats
        </Button>
      </Box>
    </Box>
  );
}
