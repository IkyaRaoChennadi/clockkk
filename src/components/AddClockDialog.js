import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';

const AddClockDialog = ({ open, onClose, onAdd }) => {
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleAdd = () => {
    if (country && timezone) {
      onAdd({ country, timezone });
      setCountry('');
      setTimezone('');
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Clock</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Country"
          fullWidth
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Timezone"
          fullWidth
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClockDialog;
