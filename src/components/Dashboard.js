// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Fab, Box, Typography, Paper, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClockCard from './ClockCard';
import AddClockDialog from './AddClockDialog';
import Timer from './Timer';
import Stopwatch from './Stopwatch'; // Assuming you have a Stopwatch component
import PersonalInfo from './PersonalInfo'; // Assuming you've already created this component

const timeFacts = [
  "A day on Venus is longer than a year on Venus.",
  "The shortest war in history lasted only 38 minutes.",
  "It takes light from the Sun around 8 minutes and 20 seconds to reach Earth.",
  "The concept of 'Leap Year' was first introduced by Julius Caesar over 2000 years ago.",
  "Humans and other animals are only able to perceive time due to the body's biological clock.",
  // Add more interesting facts
];

const Dashboard = () => {
  const initialClocks = [
    { country: 'India', timezone: 'Asia/Kolkata' },
    { country: 'New York, USA', timezone: 'America/New_York' },
    { country: 'London, UK', timezone: 'Europe/London' },
    { country: 'Tokyo, Japan', timezone: 'Asia/Tokyo' },
    { country: 'Sydney, Australia', timezone: 'Australia/Sydney' },
  ];

  const [clocks, setClocks] = useState(() => {
    const storedClocks = JSON.parse(localStorage.getItem('clocks'));
    return storedClocks || initialClocks;
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % timeFacts.length);
    }, 5000); // Changed from 10000 to 5000 for 5 seconds interval

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem('clocks', JSON.stringify(clocks));
  }, [clocks]);

  const handleAddClock = (newClock) => {
    setClocks([...clocks, newClock]);
  };

  const handleDeleteClock = (timezone) => {
    setClocks(clocks.filter(clock => clock.timezone !== timezone));
  };

  return (
    <Container sx={{ backgroundColor: '#e3f2fd', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
      <PersonalInfo name="Your Name" year="2024" batch="Batch XYZ" position="top" />
      <Typography variant="h3" gutterBottom align="center" sx={{ color: '#1e88e5', fontWeight: 'bold', marginBottom: '16px' }}>
        Welcome to the Time Dashboard!
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {clocks.map(({ country, timezone }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={timezone}>
            <ClockCard country={country} timezone={timezone} onDelete={handleDeleteClock} />
          </Grid>
        ))}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setDialogOpen(true)}
      >
        <AddIcon />
      </Fab>
      <AddClockDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAdd={handleAddClock}
      />
      <Box my={4}>
        <Divider sx={{ marginBottom: '16px' }} />
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Timer />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stopwatch />
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" sx={{ color: '#1e88e5', marginBottom: '16px' }}>Interesting Time Facts</Typography>
        <Paper elevation={3} sx={{ padding: '16px', backgroundColor: '#ffffff' }}>
          <Typography variant="body1">{timeFacts[currentFactIndex]}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
