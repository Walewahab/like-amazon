import React, { useEffect } from 'react';
import "./App.css";
import Checkout from './Checkout';
import Login from './Login';
import Home from './Home';
//import Header from './Header';
import { Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Footer from './Footer';
//import { createUserWithEmailAndPassword } from "firebase/auth";

const App = () => {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);
  

  return (

    <div className='app'>
      <Routes>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
      </Routes>     
    </div>
    
  )
}

export default App;