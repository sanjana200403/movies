import React from 'react'
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const darkTheme =  createTheme({
    palette:{
        type:"dark",
        primary:{
            main:"#fff"
        }
    }
    
})

function Custompagination({setPage,numOfPages=20}) {
    const handlePageChange =(page)=>{
        setPage(page)
        window.scroll(0,0)
    }
  return (
    <div style={
        {
            width:"100%",
            display:'flex',
            justifyContent:'center',
            marginTop:20

        }
    } >
        <ThemeProvider theme={darkTheme}>
        <Pagination count={numOfPages} 
      onChange={(e)=>handlePageChange(e.target.textContent)} color='primary'/>

        </ThemeProvider>
     
     
    
    
    </div>
  )
}

export default Custompagination
