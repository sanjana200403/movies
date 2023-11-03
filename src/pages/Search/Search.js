import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField'; 
import { ThemeProvider, createMuiTheme,createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Tab, Tabs } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import Singlecontent from '../../component/SingleContent/Singlecontent'
import Custompagination from '../../component/Pagination/Custompagination'

export default function Search() {
  const [type , setType ] = useState(0)
        const [page,setPage] =useState(1)
        const [searchText,setSearchText] = useState("")
        const [content,setContent] = useState()
        const [numOfPages,setNumOfPages] = useState()
  const darkTheme =  createTheme({
    palette:{
        type:"dark",
        primary:{
            main:"#fff",
        },
    },
    
})

const fetchSearch = async()=>{
     const {data} =  await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=c54261795aebcc7205dc57aef68d81ae&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
  setContent(data.results)
  console.log(data)
  setNumOfPages(data.total_pages)

}
useEffect(()=>{
  window.scroll(0,0)
  fetchSearch()
},[type,page])

  return (
    <>
    <div>
        
       <ThemeProvider theme={darkTheme}>
        <div style={{display:"flex", margin:"15px 0"}}>
          
        <TextField 
        style={{flex:1,color:"white"}}
        className='searchBox'
        label="Search"
        variant='filled'
        onChange={(e)=>setSearchText(e.target.value)}
        />
        <Button variant='contained' style={{marginLeft: 10}} onClick={fetchSearch}
        >
          <SearchIcon />
        </Button>
        </div>
        <Tabs value={type} indicatorColor='primary' textColor='primary' onChange={(event,newValue)=>{
          setType(newValue)
          setPage(1)
        }} >
          <Tab style={{width:"50%"}} label="search movies"></Tab>
          <Tab style={{width:"50%"}} label="search Tv Series"></Tab>

        </Tabs>
        </ThemeProvider>
        
        <div className='trending'>
  {
    content && content.map((c)=>(
      <Singlecontent key={c.id} id={c.id} poster={c.poster_path}  title={c.original_title
        ||c.name}
      date ={c.release_date
      } media_type={type?"tv":"movie"}
      vote_average={c.vote_average}
      />
    ))
  }
  {searchText && !content && (type?<h2>No Series Found</h2>:<h2>No Series Found</h2>)}

</div>

{numOfPages>1 && (
  
<Custompagination setPage={setPage} numOfPages={numOfPages} />)}

      
      
        </div>
    </>
  )
}
