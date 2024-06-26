import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';

interface ImageBoxProps {
  imageUrl: string;
  alt: string;
  description: string;
  handlePreviousSlide: () => void;
  handleNextSlide: () => void;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  imageUrl,
  alt,
  description,
  handlePreviousSlide,
  handleNextSlide,
}) => {
  return (
    // <div className="p-3">
    //   <div className="text-center bg-slate-500 bg-opacity-10">
    //     <img src={imageUrl} alt={alt} className="w-screen h-96 px-24 pt-4" />
    //     <div className="">
    //       <p className="text-white">{description}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="">
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          textAlign: 'center',
          marginBottom: '5%',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          {/* Left arrow button */}
          <IconButton
            onClick={handlePreviousSlide}
            sx={{
              position: 'absolute',
              left: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#FF5C01',
            }}
          >
            <ArrowBack sx={{ color: 'white' }} />
          </IconButton>

          {/* Slide text */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              padding: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
              borderRadius: '10px',
              textAlign: 'right',
              maxWidth: '40%', // Adjust as needed
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                color: '#FFF',
                fontFamily: '"DM Serif Display"',
                fontSize: '40px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '125%',
              }}
            >
              {alt}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: '#FFF',
                fontFamily: '"DM Serif Display"',
                fontSize: '24px', // Adjust font size as needed
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '125%',
              }}
            >
              {description}
            </Typography>
          </Box>

          {/* Right arrow button */}
          <IconButton
            onClick={handleNextSlide}
            sx={{
              position: 'absolute',
              right: '100px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#FF5C01',
            }}
          >
            <ArrowForward sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default ImageBox;
