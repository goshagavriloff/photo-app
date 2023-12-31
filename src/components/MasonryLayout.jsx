import React from 'react';
import Masonry from 'react-masonry-css';

import Pin from './Pin';

const breakpointObj={
  default:3,
  1000:2,
  500:1
};

const MasonryLayout = ({pins}) => {
  return (
    <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
      {pins?.map((pin,i)=><Pin key={pin._id} pin={pin} className='w-max'/>)}
    </Masonry>
  )
}

export default MasonryLayout