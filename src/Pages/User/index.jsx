import React from 'react'
import { Container } from './styles'
import { UserHeader } from './userHeader'
import {Routes, Route} from 'react-router-dom' 
import { UserPhotoPost } from '../../Components/UserC/UserPhotoPost'
import {Feed} from '../../Components/Feed';  
import {UserStats} from '../../Components/UserC/UserStats'; 
export const User = () => {
  return (
    <Container>
      <UserHeader/>  
      <Routes> 
        <Route path="/" element={<Feed/>}/> 
        <Route path="postar" element={<UserPhotoPost/>}/> 
        <Route path="estatistica" element={<UserStats/>}/> 
        
      </Routes>
    </Container>
  )
}
