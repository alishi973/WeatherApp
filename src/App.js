import React, { Fragment, useState,useEffect } from 'react';
import Header from './Components/Header'
import GridData from './Components/GridData'
import { CssBaseline } from '@material-ui/core';
import axios from "axios"


function App() {
  
  const [ForeCast,SetForeCast]=useState(null);
  const [GeneralData,SetGeneralData]=useState(null);
  
  /* useEffect(()=>{
    axios.get(process.env.REACT_APP_FORCAST_BASE_URL.replace("{MYCITY}","mashhad")).then((res)=>{
      setTimeout(()=>{SetForeCast(res)},3000)
    })  
  },[ForeCast])
  useEffect(()=>{
    axios.get(process.env.REACT_APP_CURRENT_BASE_URL.replace("{MYCITY}","mashhad")).then((res)=>{
      setTimeout(()=>{SetGeneralData(res)},3500)
    })
  },[GeneralData]) */


  useEffect(()=>{
    setTimeout(()=>{
      (async()=>{
        SetGeneralData(await axios.get(process.env.REACT_APP_CURRENT_BASE_URL.replace("{MYCITY}","mashhad")))
        SetForeCast(await axios.get(process.env.REACT_APP_FORCAST_BASE_URL.replace("{MYCITY}","mashhad")))
      })()
    },1000)
    
  },[])
  
  return (
    <Fragment>
      <CssBaseline />
      <Header/>
      <GridData component="main" GeneralData={GeneralData}  ForeCast={ForeCast} />
      {/* <p>{process.env.REACT_APP_API_KEY}</p> */}
    </Fragment>
  );
}

export default App;
