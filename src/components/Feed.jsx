import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { generateURL } from '../client';
import Spinner from './Spinner';
import MasonryLayout from './MasonryLayout';
import { feedQuery, searchQuery } from '../utils/data';

const Feed = () => {
  const [loading,setLoading]=useState(false);
  const [pins,setPins]=useState(null);
  const {categoryId}=useParams();

  useEffect(()=>{
    let query='';
    if (categoryId){
      query=searchQuery(categoryId);

    }else {
      query=feedQuery;
    }
    fetch(generateURL(query)).
    then((response) => response.json()).
    then((data)=>{
      setPins(data.result);
      setLoading(false);
    });
  },[categoryId]);

  if (loading) return <Spinner message="Мы добавляем новые идеи в вашу ленту!"/>
  return (
    <div>
      {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed