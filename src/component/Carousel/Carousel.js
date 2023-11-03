import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';
import './carousel.css'
import { useState } from 'react';
import { img_300, noPicture } from '../../config/config';
import { useEffect } from 'react';

const handleDragStart = (e) => e.preventDefault();
    



const Carousel = ({media_type,id}) => {

    



    const [credits,setCredits] = useState();

const items = credits?.map((c)=>(
    <div className='carouselItem'>
        <img src={c.profile_path ? `${img_300}/${c.profile_path}`:noPicture}
        onDragStart={handleDragStart}
        className='carousel_img'
        alt="" />
    
        
        <b className='carousel_txt'>{c?.name}</b>

    </div>
));
const responsive = {
  0:{
    items:3,

  }  ,
  512:{
    items:5,

  }  ,
  1024:{
    items:7,

  }  ,


}

    const fetchCredit= async ()=>{
        const {data} = await axios.get(`
        https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`
        )
        setCredits(data.cast)

    }
    useEffect(()=>{
        fetchCredit()
    },[])

   
    
  return (
    <AliceCarousel autoPlay infinite disableButtonsControls disableDotsControls responsive={responsive} mouseTracking items={items} />
  );
}
export default Carousel