"use client";

import Image from "next/legacy/image";
import copy from "../../assets/icons/copy.png";
import rightarrowinacircle from "../../assets/icons/rightarrowinacircle.png";
import { collections } from '@/constants/collections/Collections';

const BuyNft = ({ setIsOpen, collectionId }) => {
    // Find the collection containing the image with the given ID
    const collectionWithImage = collections.find(collection =>
        collection.collection.some(item => item.images.some(image => image.id === collectionId))
    );

    // Find the image with the given ID
    const selectedImage = collectionWithImage.collection.flatMap(item => item.images).find(image => image.id === collectionId);


    return (
       <div>
        <div className='fixed top-5 right-2 w-custom-four h-custom-four bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50'>
            <div className='flex flex-row items-center justify-between'>
                {/* <p className='mr-2 text-3xl text-primary-blue-100'>&#9711;</p> */}
                <p className="mr-2 h-8 w-10 flex items-center justify-center rounded-full bg-primary-blue-100 text-primary-blue-100">&#9711;</p>
                <div className=' w-full items-center flex justify-start text-semi-small text-primary-black-200'>
                    <span className='mr-2 font-light'>
                        STV6Q...4Z7WD
                    </span>
                    <Image 
                        src={copy} 
                        alt="Copy wallet address" 
                        layout="fixed"
                        className="object-cover w-24 h-24 md:w-custom md:h-custom-two rounded-full md:rounded-custom"
                        width={12} 
                        height={12} 
                    />
                </div>
                <div>
                    <Image 
                        src={rightarrowinacircle} 
                        alt="close modal"
                        layout="fixed"
                        className="object-cover w-24 h-24 md:w-custom md:h-custom-two rounded-full md:rounded-custom"
                        width={20} 
                        height={20}
                        onClick={() => setIsOpen(false)}
                    />
                </div>
            </div>
            
            <div className='my-10'>
                <p className='text-light-grey-400 text-small'>In your wallet</p>
                <p className='text-primary-black-200 text-lg font-semibold'>0.129 BTC</p>
            </div>

            <div className='text-primary-black-200 text-sm font-semibold'>Your NFTs</div>

            {selectedImage ? (
                    <div className='my-6' style={{ width: '100%', height: '30px' }}>
                        <Image
                            src={selectedImage.img}
                            alt={selectedImage.imgTitle}
                            objectFit="cover"
                            objectPosition="center"
                            style={{ borderRadius: 20 }}
                        />
                    </div>
                ) : (
                    <div>
                    <p>You don't have any NFTs.</p>
                    </div>
            )}

        </div>
       </div>
    );
};

export default BuyNft;
