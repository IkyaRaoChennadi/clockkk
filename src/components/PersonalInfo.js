// src/components/PersonalInfo.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const PersonalInfo = ({ name, year, batch, position }) => {
  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return { textAlign: 'center', marginTop: '16px' };
      case 'left':
        return { position: 'absolute', top: '16px', left: '16px' };
      case 'right':
        return { position: 'absolute', top: '16px', right: '16px' };
      case 'bottom':
        return { textAlign: 'center', marginBottom: '16px' };
      default:
        return {};
    }
  };

  return (
    <Box sx={getPositionStyle()}>
      <Typography variant="h5">Binitha Basetty</Typography>
      <Typography variant="body1">{`Year: 3rd`}</Typography>
    </Box>
  );
};

export default PersonalInfo;
