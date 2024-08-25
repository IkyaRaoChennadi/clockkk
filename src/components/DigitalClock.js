// src/components/DigitalClock.js
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import moment from 'moment-timezone';

const DigitalClock = ({ timezone }) => {
  const [time, setTime] = useState(moment().tz(timezone).format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(timezone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <Box>
      <Typography variant="h5" component="div">
        {time}
      </Typography>
    </Box>
  );
};

export default DigitalClock;
