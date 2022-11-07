import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Header from './components/Header';
import NewHeader from './components/NewHeader';
import './App.css';
import SimpleBottomNavigation from './components/NavBarFooter';
import { Container } from '@mui/material';
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Search from "./Pages/Search/Search"
import Series from "./Pages/Series/Series"
import Login from "./Pages/SignIn/Login"
import Register from "./Pages/SignUp/Register"
import { useState } from 'react';


function App() {

  const [connected, setconnected] = useState(false);

  return (
    <BrowserRouter>
    
      
      {connected ? <NewHeader onConnected={setconnected}/> : <Header/>}

      <div className="App">
          <Container>
            <Switch>
              <Route path='/' component={Trending} exact/>
              <Route path='/Movies' component={Movies} />
              <Route path='/Series' component={Series} />
              <Route path='/Search' component={Search} />
              <Route path='/Login' component=  { () =>  <Login  onConnected={setconnected}/>  } />
              <Route path='/Register' component=  { () =>  <Register  onConnected={setconnected}/>  } />
            </Switch>
          </Container>
        </div>
        <SimpleBottomNavigation/>

    </BrowserRouter>
  );
}

export default App;
