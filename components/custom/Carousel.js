"use client";

import { useEffect, useState } from 'react';

import PropTypes from "prop-types";
import Image from 'next/image';

import CustomButton from './CustomButton';

const Carousel = ({ collections }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visitedIndicators, setVisitedIndicators] = useState([0]);

    // count the number of trending items
    const trendingItems = collections.flatMap(collection =>
        collection.collection.flatMap(item => item.images.filter(image => image.trending))
    );

    const indicatorWidth = `calc(100% / ${trendingItems.length})`;

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === trendingItems.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        // Automatically move to the next slide after 4 seconds
        const interval = setInterval(nextSlide, 1000);
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
        if (currentIndex === trendingItems.length - 1) {
            // Wait for 4 seconds before resetting visitedIndicators
            const timeout = setTimeout(() => {
                setVisitedIndicators([0]);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, trendingItems.length]);

    const currentItem = trendingItems[currentIndex];
    const currentCollection = collections.find(collection =>
        collection?.collection.some(item => item.images.some(image => image.id === currentItem.id))
    );


    return (
        <div className="relative">
            {/* Carousel indicators */}
            <div className="mb-2 mx-3 flex justify-center z-10">
                {trendingItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`h-3 mx-1 rounded-full ${
                            visitedIndicators.includes(index) ? 'bg-black' : 'bg-light-grey-200'
                        } transition-colors duration-1000`}
                        style={{ width: indicatorWidth }}
                    ></div>
                ))}
            </div>


            {/* Carousel content */}
            <div className="h-custom sm:h-96 bg-light-grey-200 rounded-custom overflow-hidden relative">
                <div
                    className="absolute w-full h-full top-0 left-full transition-opacity duration-1000"
                    style={{
                        left: `${currentIndex * 100}%`,
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    <div className="bg-light-grey-200 h-auto flex flex-col sm:flex-row items-center mx-3 my-3 md:mx-10 px-2 py-4 md:py-10 justify-between">
                     
                        <div className='w-full'>
                            <CustomButton
                                title="trending now"
                                btnType="button"
                                btnStyles="btn-light-red-styles"
                                btnTitleStyle="btn-light-red-title-styles"
                            />
                            <p className="mt-4 md:mt-8 text-light-grey-100 font-light mb-1 text-sm">{`${currentItem.collectionTitle} collection`}</p>
                            <p className="font-extrabold text-sm md:text-4xl">{currentItem.imgTitle}</p>

                            <div className="flex flex-col sm:flex-row md:items-center justify-start mt-4">
                                <div>
                                    <Image 
                                        src={currentCollection.artistImg} 
                                        alt={currentCollection.artist} 
                                        width={60} 
                                        height={60} 
                                    />
                                </div>

                                <div className="mx-3">
                                    <p className="text-light-grey-100 text-xs font-light">Artist</p>
                                    <p className="text-primary-black-100 text-sm font-normal">{currentCollection.artist}</p>
                                </div>

                            </div>
                            
                            <div className="flex flex-col sm:flex-row md:items-center justify-start gap-3 mt-4 md:mt-10">
                                <CustomButton title="Buy" btnType="button" btnStyles="btn-filled-styles" btnTitleStyle="btn-filled-title-styles" />
                                <CustomButton title="See Collection" btnType="button" btnStyles="btn-outlined-styles-sm" btnTitleStyle="btn-outlined-title-styles-sm" />
                            </div>
                        </div>

                        <div className="mt-10 md:mt-0 py-5 pt-0 w-full flex md:justify-end">
                            <Image 
                                src={currentItem.img} 
                                alt={currentItem.imgTitle} 
                                layout="fixed"
                                className="object-cover w-24 h-24 md:w-custom md:h-custom-two rounded-full md:rounded-custom"
                                width={530} 
                                height={320} 
                            />
                        </div>

                        </div>
                </div>
            </div>
        </div>
    );
};

Carousel.propTypes = {
    collections: PropTypes.node.isRequired
};

export default Carousel;
