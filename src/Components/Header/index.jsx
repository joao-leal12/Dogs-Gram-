import React, {useContext} from 'react'
import {HeaderContainer} from './styles';  
import {Link} from 'react-router-dom';   
import MyDogs from '../../assets/dogs.svg';  
import { Global } from '../../GlobalContext/useContext';

export  const Header = () => {

  const {data} = useContext(Global);  

  return (
    <HeaderContainer>
      <nav className="container"> 
       
          <Link  to="/" aria-label="Dogs - Home" class="logo">
          
            <img src={MyDogs}/> 

          </Link >
          {data ? (

              <Link to="/login" className="login"> 

                {data.nome}

              </Link> 
              


          ): ( 

        <Link to="/login" className="login"> 

              Login / Criar 
          
        </Link>

          )}
         
      
       
      </nav> 
    </HeaderContainer>

  )
}
