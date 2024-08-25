// src/components/ClockCard.js
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment-timezone';

const ClockCard = ({ country, timezone, onDelete }) => {
  const [time, setTime] = useState(moment().tz(timezone).format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().tz(timezone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <Card sx={{ minWidth: 275, margin: '16px', backgroundColor: '#f5f5f5', position: 'relative' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {country}
        </Typography>
        <Typography variant="h3" component="div">
          {time}
        </Typography>
        <IconButton
          aria-label="delete"
          onClick={() => onDelete(timezone)}
          sx={{ position: 'absolute', top: '8px', right: '8px' }}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ClockCard;
