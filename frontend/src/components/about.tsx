// import React, { useState } from 'react';
// import { Grid, Typography } from '@mui/material';
// import HeroSection from './herosection';

// const About = () => {
//   // Define state variable for the current slide index
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   // Information for each slide
//   const slideInformation = [
//     'Information for slide 1',
//     'Information for slide 2',
//     'Information for slide 3',
//     // Add more information as needed
//   ];

//   return (
//     <div style={{ padding: '20px' }}>
//       <Grid container spacing={2}>
//         {/* First section: HeroSection */}
//         <Grid item xs={12} md={6}>
//           <HeroSection />
//         </Grid>

//         {/* Second section: Information based on the current slide */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h1">Information</Typography>
//           <Typography variant="body1">
//             {/* Display the information for the current slide */}
//             {slideInformation[currentSlideIndex]}
//           </Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default About;

import { Grid, Typography, Button } from '@mui/material';
import useHeroSectionLogic from './HeroSectionLogic'; // Import the custom hook

const About = () => {
    // Use the custom hook for HeroSection logic
    const { slides, currentSlideIndex, handlePreviousSlide, handleNextSlide } = useHeroSectionLogic();

    return (
        <Grid sx={{ padding: '20px', }}>
            <Grid container spacing={2}>
                {/* First section: Navigation for HeroSection */}
                <Grid item xs={12} md={6}>
                    <Button onClick={handlePreviousSlide}>Previous</Button>
                    <Button onClick={handleNextSlide}>Next</Button>
                </Grid>

                {/* Second section: Information based on the current slide */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Information</Typography>
                    <Typography variant="body1">
                        {slides[currentSlideIndex]}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
