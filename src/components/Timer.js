// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid, Container } from '@mui/material';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsActive(false);
      alert('Time is up!');
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const handleStart = () => {
    const totalTime = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setTimeLeft(totalTime);
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(null);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom>
          Timer
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <TextField
              label="Hours"
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              inputProps={{ min: 0 }}
              variant="outlined"
              sx={{ width: 100 }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Minutes"
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              inputProps={{ min: 0 }}
              variant="outlined"
              sx={{ width: 100 }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Seconds"
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              inputProps={{ min: 0 }}
              variant="outlined"
              sx={{ width: 100 }}
            />
          </Grid>
        </Grid>
        <Box my={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStart}
            disabled={isActive}
            sx={{ marginRight: 2 }}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
        {timeLeft !== null && (
          <Typography variant="h3" sx={{ fontFamily: 'Courier New, Courier, monospace', color: '#3f51b5' }}>
            {`${Math.floor(timeLeft / 3600)
              .toString()
              .padStart(2, '0')}:${Math.floor((timeLeft % 3600) / 60)
              .toString()
              .padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Timer;
