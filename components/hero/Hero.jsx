import React from 'react';

import Carousel from '../custom/Carousel';
import { collections } from '@/constants/collections/Collections';

const Hero = () => {

  return (
    <div>
      <Carousel collections={collections} />
    </div>
  )
}

export default Hero
