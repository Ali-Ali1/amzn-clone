import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import Checkout from './Checkout';
import Header from './Header';
import Login from './Login';
import {useStateValue} from './StateProvider';

import './App.css';
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else {
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  console.log(user)

  return (
    <Router>
      <div className='app'>
        <Switch>
          
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/> 
          </Route>
          
          <Route path='/'>
            <Header/>
            <Home/>


          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
