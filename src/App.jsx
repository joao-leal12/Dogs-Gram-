import React from 'react'
import { BrowserRouter } from 'react-router-dom'; 
import { Header } from './Components/Header'; 
import {Footer} from './Components/Footer'; 
import {Routess} from './Components/Routes'; 
import { GlobalStyles } from './GlobalStyles/GlobalStyles';
export const App = () => {
  return ( 
    <div> 
      <GlobalStyles/>
      <BrowserRouter>
        <Header/> 
        <Routess/> 
        <Footer/> 
      </BrowserRouter>
    </div>
  )
}
