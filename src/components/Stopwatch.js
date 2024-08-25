// src/components/Stopwatch.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Container } from '@mui/material';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Stopwatch
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: 'Courier New, Courier, monospace', color: '#3f51b5' }}>
          {`${Math.floor(time / 3600).toString().padStart(2, '0')}:${Math.floor((time % 3600) / 60)
            .toString()
            .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`}
        </Typography>
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
            onClick={handleStop}
            disabled={!isActive}
            sx={{ marginRight: 2 }}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Stopwatch;
