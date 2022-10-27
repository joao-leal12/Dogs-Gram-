import React from 'react'
import { BrowserRouter } from 'react-router-dom'; 
import { Header } from './Components/Header'; 
import {Footer} from './Components/Footer'; 
import {Routess} from './Components/Routes'; 
import { GlobalStyles } from './GlobalStyles/GlobalStyles'; 
import {GlobalContext } from './GlobalContext/useContext';
import { Apps, AppBody } from './styles';
export const App = () => {
     

  return ( 
    <Apps> 
      <GlobalStyles/> 
       <BrowserRouter>
        <GlobalContext>
          <Header/> 
          <AppBody>
             <Routess/> 
          </AppBody>
          <Footer/> 
       </GlobalContext>
      </BrowserRouter>
    </Apps>
  )
}
