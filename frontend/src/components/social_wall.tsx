import { Box } from '@mui/material';
import React, { forwardRef } from 'react';

const SocialWall = forwardRef<HTMLElement>((props, ref) => {
  // Define state variable for the current slide index

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
      }}
      ref={ref}
    >
      <iframe
        allowFullScreen
        id="wallsio-iframe"
        src="https://my.walls.io/tw5mt?nobackground=1&show_header=0&show_post_info=1&accessibility=0"
        style={{ border: 0, height: '100vh', width: '100vw' }}
        loading="lazy"
        title="My social wall"
      ></iframe>
    </Box>
  );
});

export default SocialWall;
