import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import Badge from '@mui/material/Badge';
import ContentModal from '../../ContentModal/ContentModal';
export default function Singlecontent({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) {
  return (
   
   <>
   <ContentModal media_type={media_type} id={id} >
 <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"} />
 <img className='poster' src={poster? `${img_300}/${poster}`:unavailable} alt={title} />
 <b className='title'>{title}</b>
 <span className='subTitle'>
  <span> {media_type==="tv"?"TV Series":"Movie"}</span>
 
 
 
 <span>{date} </span>
 </span>
   </ContentModal>
   
   </>
  )
}

