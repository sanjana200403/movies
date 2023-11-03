import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import SimpleBottomNavigation from './component/MainNav';
// import {BrowserRouter} from 'react-router-dom'
import { Container} from '@mui/material';

import { BrowserRouter,Switch} from 'react-router-dom/cjs/react-router-dom.min';

import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies';
import Search from './pages/Search/Search';
import Series from './pages/Series/Series';
function App() {
  return (
   

<>
<BrowserRouter>

<Header/>
<div className="app">
<Container>
<Switch>
  <Route exact path="/" component={Trending}/>
  <Route exact path="/movie" component={Movies}/>
  <Route exact path="/series" component={Series}/>
  <Route exact path="/search" component={Search}/>
</Switch>
      
</Container>

</div>

<SimpleBottomNavigation/>
</BrowserRouter>
</>
   
   
  );
}

export default App;
