
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory()
useEffect(()=>{
  if(value==0){
    history.push("/")
  }
  else if(value==1){
    history.push("/movie")
  }
  else if(value==2){
    history.push("/series")
  }
  else if(value==3){
    history.push("/search")
  }
},[value,history])

  return (
    <Box sx={{ width: "100%",
     position:"fixed",
     bottom: 0,
     backgroundColor:"black",
     zIndex:100}}>
      <BottomNavigation
      style={{backgroundColor:"#2d313a"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}