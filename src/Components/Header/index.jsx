import React from 'react'
import {HeaderContainer} from './styles';  
import {Link} from 'react-router-dom';   
import MyDogs from '../../assets/dogs.svg';  

export const Header = () => {

  return (
    <HeaderContainer>
      <nav> 
       
          <Link  to="/" aria-label="Dogs - Home">
          
            <img src={MyDogs}/> 

          </Link >

          <Link to="/login" className="login"> 

            Login / Criar 
          
          </Link>
      
      
      </nav> 
    </HeaderContainer>

  )
}
