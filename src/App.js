import React from 'react';
import Home from './Home';
import Detail from './Detail';
import { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';


export const CountryContext = createContext()

function App() {

  
  const navigate = useNavigate()
    
  const [child , getChild] = useState([])

  function info(da){
     getChild(da)
     navigate('/detail')
  }

 
// console.log(child)

  return (
    <>
    <CountryContext.Provider value={child} >
    <Routes>
      <Route path='/' element=
      {<Home clickData={info}/>} />
      <Route path='/detail' element={<Detail />} />
    </Routes>
    </CountryContext.Provider>
    
    </>
  );
}

export default App ;

