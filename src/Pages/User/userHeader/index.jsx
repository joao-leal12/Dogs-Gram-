import React from 'react'
import {Header} from './styles'; 
import { UserHeaderNav } from '../../../Components/UserC/UserHeaderNav';
import { useLocation } from 'react-router-dom';
export const UserHeader = () => {
 const [title, setTitle] = React.useState();
 const location = useLocation()
  
 React.useEffect(()=> {
   
    switch(location.pathname){

      case '/conta/estatisticas': 

        setTitle('Estatistica')
      break  

      case '/conta' : 

        setTitle('Feed') 
      break  

      case '/conta/postar': 

        setTitle('Postar Fotos') 

      break 


    }

 }, [location])
  return (
    <Header>
        <h1 className="title">{title}</h1>
        <UserHeaderNav/> 
    </Header>
  )
}

