import axios from 'axios';
import { forwardRef, useEffect, useState } from 'react';
import ImageBox from './ImageBox';
import { Grid } from '@mui/material';

interface MediaItem {
  id: string;
  alt: string;
  description: string;
  filename: string;
  createdAt: string;
  imageUrl: string;
}

const HeroSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slides, setSlides] = useState<MediaItem[]>([]);

  // Rotate slides every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(
          'https://winjit-proj.vercel.app/fetch-media'
        );
        setSlides(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.message);
        }
      }
    };

    fetchMedia();
  }, []);

  const getImageUrl = (imageUrl: string) => {
    return `https://winjit-proj.vercel.app${imageUrl}`;
  };
  const handlePreviousSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Get the current slide
  const currentSlide = slides[currentSlideIndex];

  return (
    <div ref={ref}>
      <Grid
        sx={{
          width: '1920px',
          height: '912px',
          flexShrink: 0,
        }}
      >
        <>
          {slides.length > 0 && currentSlide ? (
            <ImageBox
              imageUrl={getImageUrl(currentSlide.imageUrl)}
              alt={currentSlide.alt}
              description={currentSlide.description}
              handlePreviousSlide={handlePreviousSlide}
              handleNextSlide={handleNextSlide}
            />
          ) : (
            <div>Loading...</div>
          )}
        </>
      </Grid>
    </div>
  );
});

export default HeroSection;
