"use client";

import { useEffect, useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visitedIndicators, setVisitedIndicators] = useState([0]);
    const indicatorWidth = `calc(100% / ${items.length})`;

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        // Automatically move to the next slide after 4 seconds
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    // Function to move to the previous slide
    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    // };

    useEffect(() => {
        // Update visitedIndicators when currentIndex changes
        setVisitedIndicators((prevIndicators) => {
            const updatedIndicators = [...prevIndicators];
            const currentIndexExists = updatedIndicators.includes(currentIndex);

            if (!currentIndexExists) {
                updatedIndicators.push(currentIndex);
            }

            return updatedIndicators;
        });
    }, [currentIndex]);

    useEffect(() => {
        // Reset visitedIndicators when currentIndex reaches the last item
        if (currentIndex === items.length - 1) {
            // Wait for 4 seconds before resetting visitedIndicators
            const timeout = setTimeout(() => {
                setVisitedIndicators([0]);
            }, 4000);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, items.length]);

    return (
        <div className="relative">
            {/* Carousel indicators */}
            <div className="mb-2 mx-3 flex justify-center z-10">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 mx-1 rounded-full ${
                            visitedIndicators.includes(index) ? 'bg-black' : 'bg-light-grey-200'
                        } transition-colors duration-1000`}
                        style={{ width: indicatorWidth }}
                    ></div>
                ))}
            </div>

            {/* Carousel content */}
            <div className="h-72 bg-light-grey-200 rounded-custom py-8 px-12 overflow-hidden relative">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute w-full h-full top-0 left-full transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                            left: `${index * 100}%`,
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        <div className="bg-light-grey-200 mx-4 flex items-center justify-center h-full">
                            <p className="text-2xl">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
