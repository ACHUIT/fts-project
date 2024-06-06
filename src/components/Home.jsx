import React from 'react'
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/images/home_image.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: '600px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    </Box>
  );
}

export default Home;
