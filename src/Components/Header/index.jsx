import React, {useContext} from 'react'
import {HeaderContainer} from './styles';  
import {Link} from 'react-router-dom';   
import MyDogs from '../../assets/dogs.svg';  
import { Global } from '../../GlobalContext/useContext';

export  const Header = () => {

  const {data, userLogout} = useContext(Global);  

  return (
    <HeaderContainer>
      <nav> 
       
          <Link  to="/" aria-label="Dogs - Home">
          
            <img src={MyDogs}/> 

          </Link >
          {data ? (

              <Link to="/login" className="login"> 

                {data.nome}
              <button onClick={userLogout }>Sair</button>
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
