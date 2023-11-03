import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




import axios from 'axios';
import { useState,useEffect } from 'react';
import { img_500,unavailable,unavailableLandscape } from '../config/config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './contentModal.css'
import Carousel from '../component/Carousel/Carousel';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  borderRadius:10,
  height:"80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow:"auto",
  scrollbarWidth: "none",
  p: 4,
};

export default function ContentModal({children,media_type,id}) {
    const [content,setContent] = useState()
    const [video,setVideo] = useState()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fetchData = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`)
    setContent(data)
  }
  const fetchVideo = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`)
    setVideo(data.results[0]?.key)
  console.log(data)
  }
  useEffect(()=>{
    fetchData()
    fetchVideo()

  },[])

  return (
    <>
      <div  className='media' onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            {content &&(

            
            
<div className="contentModal">
 <img className='content_portrait' src={content.poster_path?`${img_500}/${content.poster_path}`: unavailable} alt="" />
 <img className='ContentModal_landscape'
  src={content.backdrop_path?`${img_500}/${content.backdrop_path}`: unavailable} alt="" />
  <div className='ContentModal_about'>
   <span className='ContentModal_title'>
     {content.name|| content.title}
     ({(
       content.first_air_date || content.release_date||"--------"
     ).substring(0,4)

     })
   </span>

   {
     content.tagline && (
       <i className='tagline'>{content.tagline}</i>
     )
   }
   <span className='ContentModal_description'>
     {
       content.overview
     }
   </span>

<div>
<Carousel media_type={media_type} id={id}/>
</div>
<Button 
variant='contained'
startIcon={<YouTubeIcon/>}
color='secondary'
target='_blank'
href={`https://www.youtube.com/watch?v=${video}`}
>

Watch the trailer
</Button>

  </div>

</div>
  )}

             
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              
              
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}