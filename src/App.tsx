import { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

const App = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');

  const handleSave = () => {
    localStorage.setItem('name', name);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to My Retirement Planning App
      </Typography>
      <TextField
        label="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={handleSave}>
        Save to Local Storage
      </Button>
    </Box>
  )
}

export default App;
