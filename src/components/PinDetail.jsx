import React,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {MdDownloadForOffline} from 'react-icons/md';
import { Link,useParams } from 'react-router-dom';
import { client,urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';


const PinDetail = ({user}) => {
  const [pins,setPins]=useState();
  const [pinDetail,setPinDetail]=useState();
  const {pinId}=useParams();



  const fetchPinDetails=()=>{
    let query=pinDetailQuery(pinId);
    if (query){
      client.fetch(query).then((data)=>{
        setPinDetail(data[0]);
        if (data[0]){
          query=pinDetailMorePinQuery(data[0]);
          client.fetch(query).then((res)=>setPins(res));
        }
      });
    }
  }
  useEffect(()=>{
    fetchPinDetails();
  },[pinId])

  if (!pinDetail){return <Spinner message="Загрузка данных о картинке"/>}
  return (
    <>
    
      {pinDetail && (
        <div className="flex xl:flex-row flex-col m-auto bg-white" style={{ maxWidth: '1500px', borderRadius: '32px' }}>
          <div className="flex justify-center items-center md:items-start flex-initial">
            <img
              className="rounded-t-3xl rounded-b-lg"
              src={(pinDetail?.image && urlFor(pinDetail?.image).url())}
              alt="user-post"
            />
          </div>
          <div className="w-full p-5 flex-1 xl:min-w-620">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <a
                  href={`${pinDetail.image.asset.url}?dl=`}
                  download
                  className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
                >
                  <MdDownloadForOffline />
                </a>
              </div>
              <a href={pinDetail.destination} target="_blank" rel="noreferrer">
                {pinDetail.destination.length>20?pinDetail.destination.slice(8,20):pinDetail.destination.slice(8)}
              </a>
            </div>
            <div>
              <h1 className="text-4xl font-bold break-words mt-3">
                {pinDetail.title}
              </h1>
              <p className="mt-3">{pinDetail.about}</p>
            </div>
            
          </div>
        </div>
      )}
      {pins?.length > 0 && (
        <h2 className="text-center font-bold text-2xl mt-8 mb-4">
          Загрузить остальные
        </h2>
      )}
      {pins ? (
        <MasonryLayout pins={pins} />
      ) : (
        <Spinner message="Loading more pins" />
      )}
    </>
  );
}

export default PinDetail