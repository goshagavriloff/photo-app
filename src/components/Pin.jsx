import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {MdDownloadForOffline} from 'react-icons/md';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';


import {client,urlFor} from '../client';

const Pin = ({pin:{postedBy,image,_id,destination}}) => {
  const [postHovered,setPostHovered]=useState(false);
  const [savingPost,setSavingPost]=useState(false);


  const navigate=useNavigate();

  return (
    <div className='m-2'>
      <div
        onMouseEnter={()=>setPostHovered(true)}
        onMouseLeave={()=>setPostHovered(false)}
        onClick={()=>navigate(`/pin-detail/${_id}`)}
        className="relative cursor-zoom-in w-auto hover:bg-shadow rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        {true && (
          <div 
          className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2"
          style={{height:'100%'}}
          >
            <div 
            className="flex items-center justify-between">
              <div className="flex gap-2">
                <a 
                href={`${image?.asset?.url}?dl=`} 
                download 
                onClick={(e)=>e.stopPropagation()}
                className='bg-white w-9 h-9 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none'
                >

                <MdDownloadForOffline />
                </a>

              </div>

            </div>
            <div className="flex justify-between items-center gap-2 w-full">
                {destination && (
                  <a href={destination} target='_blank' rel='noreferrer' className='bg-white  rounded-full flex items-center gap-2 text-black font-bold p-2 pl-4 pr-4 opacity-75 hover:opacity-100 hover:shadow-md outline-none'>
                    <BsFillArrowUpRightCircleFill />
                    {destination.length>20?destination.slice(8,20):destination.slice(8)}
                  </a>
                )}
              </div>
          </div>
        )}
      <img className='rounded-lg w-full' src={urlFor(image).width(400).url()} alt="user-post" />
      </div>

    </div>
  )
}

export default Pin