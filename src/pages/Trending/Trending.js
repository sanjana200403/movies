import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Singlecontent from '../../component/SingleContent/Singlecontent'


import './Trending.css'
import Custompagination from '../../component/Pagination/Custompagination'

export default function Trending() {
  const [page,setPage] = useState(1)
  const [content,setContent] = useState([])
  const fetchTrending = async ()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c54261795aebcc7205dc57aef68d81ae&page=${page}`)
    console.log(data.results)
    setContent(data.results)

  }
  useEffect(()=>{
    fetchTrending()
  },[page])
  return (
<>
<div>
        
        <span className="pageTitle">
    trending 
        </span>
<div className='trending'>
  {
    content && content.map((c)=>(
      <Singlecontent key={c.id} id={c.id} poster={c.poster_path}  title={c.original_name||c.name||c.title}
      date ={c.first_air_date||c.release_date
      } media_type={c.media_type}
      vote_average={c.vote_average}
      />
    ))
  }

</div>


  
<Custompagination setPage={setPage} />


        </div>
</>
  )
}
