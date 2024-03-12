"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';
import { useState } from 'react';

const CollectionCard = ({ collection }) => {
  const { artist, artistImg, collection: images } = collection;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      {images.map((image, index) => (
        <div 
          key={index} 
          className="bg-white sm:w-custom-three md:w-custom-two shadow-xl border-0 border-t border-t-gray-400 border-opacity-10 rounded-custom-two px-2 py-2 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='h-44 relative overflow-hidden'>
            <Image 
                src={image.img} 
                alt={image.collectionTitle} 
                width="100%" 
                height="100%" 
                className="h-full w-full rounded-custom-two" 
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black rounded-custom-two bg-opacity-50 flex items-center justify-center">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <CustomButton 
                    title="Go to collection &rarr;" 
                    btnType="button"
                    btnStyles="btn-filled-white-styles"
                    btnTitleStyle="btn-filled-white-title-styles"
                  />
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-row items-center justify-between mt-8 mx-2 mb-6'>
            <p className='text-primary-black-900 font-bold text-sm md:text-base'>{image.collectionTitle}</p>
            <CustomButton 
                title="120 NFT" 
                btnType="button" 
                btnStyles="btn-light-green-styles" 
                btnTitleStyle="btn-light-green-title-styles" 
            />
          </div>

          <div className='flex flex-col mt-8 mx-2 mb-6'>
            <p className='text-light-grey-100 font-light text-small'>Price Range: {image.price}</p>
            <p className='text-primary-black-100 font-light text-semi-small mt-1'>{image.desc}</p>
          </div>

          <div className='flex flex-row items-center justify-start mt-8 mx-2 mb-6'>
            <div>
              <Image src={artistImg} width={50} height={50} alt={artist} />
            </div>
            <div className='mx-3'>
              <p className="text-light-grey-100 text-small font-light">Artist</p>
              <p className="text-primary-black-100 text-semi-small font-normal">{artist}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionCard;
