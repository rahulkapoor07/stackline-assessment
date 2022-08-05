import React, {useEffect } from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import Product from './components/Product';
import Graph from './components/Graph';
import {getDataFromAPI} from "./types/actionCreator";
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { State } from './rootReducer';

const App = ()=> {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch<any>(getDataFromAPI());
  console.log("inside");
  },[]);
  

  // useEffect(()=>{
  //     dispatch<any>(getDataFromAPI())
  //     console.log("inside");
  // },[dispatch]);
  const data = useSelector((store : State) => store);
  
  return (
    <div className="App">
      {data.apiData[0] && <div className='app-div'>
      <Navbar />
      <div><Product /></div>
      <div><Graph /></div>
      </div>}
      
    </div>
  );
}

export default App;
