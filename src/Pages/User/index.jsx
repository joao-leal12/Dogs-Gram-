import React, { useContext } from 'react'
import { Container } from './styles'
import { UserHeader } from './userHeader'
import {Routes, Route} from 'react-router-dom' 
import { UserPhotoPost } from '../../Components/UserC/UserPhotoPost'
import {Feed} from '../../Components/Feed';  
import {UserStats} from '../../Components/UserC/UserStats'; 
import { Global } from '../../GlobalContext/useContext'
import { NotFounds } from '../NotFounds' 
import {Head} from '../../Components/Helper/Head'; 
export const User = () => {

  const {data} = useContext(Global);
  
  return ( 
    <Container className="container">
      <Head title="Minha Conta"/>
      <UserHeader/>  
      <Routes> 
        <Route path="/" element={<Feed user={data.id}/>}/>  
        <Route path="postar" element={<UserPhotoPost/>}/> 
        <Route path="estatisticas" element={<UserStats/>}/> 
        <Route path="*" element={<NotFounds/>}/>  
        
      </Routes>
    </Container>
  )
}
