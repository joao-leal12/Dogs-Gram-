import React from 'react'
import {HomeContainer} from './styles';  
import {Feed} from '../../Components/Feed'; 
import { Head } from '../../Components/Helper/Head';
export const Home = () => {
  return (
    <HomeContainer className="container mainContainer">
          
          <Head title="Fotos" description="Home do site Dogs, com o feed de fotos." /> 
          <Feed/> 
       
    </HomeContainer>
  )
}
