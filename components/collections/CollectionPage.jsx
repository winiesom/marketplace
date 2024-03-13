"use client";

import { useState } from 'react';
import Image from "next/legacy/image";
import CustomButton from '../custom/CustomButton';
import { useAuth } from '@/contexts/AuthContext'; 
import BuyNft from '../buy/BuyNft';

const CollectionPage = ({selectedCollection}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { isConnected } = useAuth();
    const [isOpen, setIsOpen] = useState(false); 
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleBuyNft = (itemId) => {
      setSelectedItemId(itemId); 
      setIsOpen(true); 
  };

  return (
    <div className='mx-20 mb-20'>
      <div className="h-auto flex flex-col sm:flex-row items-center mx-3 my-3 mb-20 md:mx-10 px-2 py-4 md:py-10 justify-between">
                     
        <div className='w-full'>
            <CustomButton
                title="trending now"
                btnType="button"
                btnStyles="btn-light-red-styles"
                btnTitleStyle="btn-light-red-title-styles"
            />
            <p className="mt-4 md:mt-8 text-light-grey-100 font-light mb-1 text-sm">collection</p>
            <p className="font-extrabold text-sm md:text-4xl">{selectedCollection.collection[0].collectionTitle}</p>
            <p className="font-extrabold text-sm md:text-4xl">{selectedCollection.collection.img}</p>
            <p className="text-primary-black-100 font-light text-semi-small mt-3">
            Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo
            </p>

            <div className="flex flex-col sm:flex-row md:items-center justify-start mt-4">
                <div>
                    <Image 
                        src={selectedCollection.artistImg} 
                        alt={selectedCollection.artist} 
                        width={60} 
                        height={60} 
                    />
                </div>

                <div className="mx-3">
                    <p className="text-light-grey-100 text-xs font-light">Artist</p>
                    <p className="text-primary-black-100 text-sm font-normal">{selectedCollection.artist}</p>
                </div>

            </div>
        </div>

        <div className="mt-10 md:mt-0 py-5 pt-0 w-full flex md:justify-end">
            <Image 
                src={selectedCollection.collection[0].img} 
                alt={selectedCollection.collection[0].imgTitle} 
                layout="fixed"
                className="object-cover w-24 h-24 md:w-custom md:h-custom-two rounded-full md:rounded-custom"
                width={400} 
                height={320} 
            />
        </div>

    </div>

    <div className="collections-title mb-8">NFTs</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {selectedCollection ? selectedCollection.collection[0].images.map((image, index) => (
        <div 
          key={index} 
          className="bg-white sm:w-custom-three md:w-custom-two shadow-xl border-0 border-t border-t-gray-400 border-opacity-10 rounded-custom-two px-2 py-2 mb-4 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className='h-72 relative overflow-hidden'  style={{ width: '100%', height: '288px' }}>
          <Image 
            src={image.img} 
            alt={image.collectionTitle} 
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ borderRadius: 30 }}
          />
            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-black rounded-custom-two bg-opacity-50 flex items-center justify-center">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <CustomButton 
                    title="Buy &rarr;" 
                    btnType="button"
                    btnStyles="btn-filled-white-styles"
                    btnTitleStyle="btn-filled-white-title-styles"
                    disabled={!isConnected}
                    handleClick={() => handleBuyNft(image.id)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-row items-center justify-between mt-8 mx-2 mb-6'>
            <p className='text-primary-black-900 font-bold text-sm md:text-base'>{image.imgTitle}</p>
            <CustomButton 
                title={image.price}
                btnType="button" 
                btnStyles="btn-light-grey-styles" 
                btnTitleStyle="btn-light-grey-title-styles" 
            />
          </div>


        </div>
      )) : []}
    </div>
 
    {isOpen && (
      <BuyNft setIsOpen={setIsOpen} collectionId={selectedItemId} />
    )}
    </div>
  )
}

export default CollectionPage
