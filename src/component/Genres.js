import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

function Genres({
  type,
  selectedGenres,
  setSelectedGenres,
  genres ,
  setGenres,
  setPage

}) {
const handleAdd = (genre) =>{
  setSelectedGenres([...selectedGenres,genre]);
  setGenres(genres.filter((g) => g.id !== genre.id))
  setPage(1)


}
const handleRemove = (genre) =>{
   console.log(genre)
  setSelectedGenres(
    selectedGenres.filter((selected) => selected.id !== genre.id)
  );
   setGenres([...genres,genre]);
  setPage(1)


}

const fetchGenres = async ()=>{
    const {data} =    await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US`)
    console.log(data)
    setGenres(data.genres)
}
console.log(genres)
useEffect(()=>{
  fetchGenres()
  return ()=>{
    setGenres({})
  }
},[])

  return (
    <div style={{padding:"6px 0",margin:"2px 4px"}} >
      {selectedGenres && selectedGenres.map((genre)=>(
          <Chip style={{margin:"2px 4px" }} 
          
           label={genre.name}
         
           
           size='small'
           color='primary'
           key={genre.id}
     
           onDelete={()=>handleRemove(genre)}
        clickable 
           />
        ))
      }
        {genres && genres.map((genre)=>(
          <Chip style={{margin:"2px 4px", color:"black",backgroundColor:"white" }} 
           label={genre.name}
           clickable 
           size='small'
           onClick = {()=> handleAdd(genre)}
           key={genre.id}
           />
        ))
      }
     
     
    </div>
  )
}

export default Genres
