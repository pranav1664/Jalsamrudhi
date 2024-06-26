import React, { useState, useEffect } from 'react';

const useHeroSectionLogic = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [slides, setSlides] = useState([
        'Information for slide 1',
        'Information for slide 2',
        'Information for slide 3',
        // Add more information as needed
    ]);

    // Add logic to navigate slides
    const handlePreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return {
        slides,
        currentSlideIndex,
        handlePreviousSlide,
        handleNextSlide,
    };
};

export default useHeroSectionLogic;
