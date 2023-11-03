import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Singlecontent from '../../component/SingleContent/Singlecontent'
import Custompagination from '../../component/Pagination/Custompagination'
import Genres from '../../component/Genres'
import useGenres from '../../hooks/useGenre'


export default function Movies() {
  const [page,setPage] = useState(1)
  const [content,setContent] = useState([])
  const [numOfPages,setNumOfPages] = useState()
  const [selectedGenres,setSelectedGenres] = useState([])
  const [genres,setGenres] = useState([])
  const  genreForUrl = useGenres(selectedGenres)
  const fetchMovies = async()=>{
    
      
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`
    );
    
 
    // genreForUrl
    
    setContent(data.results)
    setNumOfPages(data.total_pages)
   
      
    // console.log(data)
      
  }
  useEffect(()=>{
    fetchMovies();
  },[page,genreForUrl])
  return (
  
    
    <>
  <div>
        
        <span className="pageTitle">
    movies
        </span>
        <Genres 
        type='movie'
        selectedGenres={selectedGenres}
        setSelectedGenres = {setSelectedGenres}
        genres = {genres}
        setGenres= {setGenres}
        setPage= {setPage}

        />
     
     



        <div className='trending'>
  {
    content && content.map((c)=>(
      <Singlecontent key={c.id} id={c.id} poster={c.poster_path}  title={c.original_title
        ||c.name}
      date ={c.release_date
      } media_type="movie"
      vote_average={c.vote_average}
      />
    ))
  }

</div>

{numOfPages>1 && (
  
<Custompagination setPage={setPage} numOfPages={numOfPages} />)}


        </div>
</>
  )
}
