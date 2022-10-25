import React from 'react'
import { Routes, Route } from 'react-router-dom'; 
import { Login } from '../../Pages/Login';
import { Home} from '../../Pages/Home';   
import {User} from '../../Pages/User';   
import ProtectRoute from '../Helper/ProtectRoute/index.jsx';
import { PhotoPage } from '../../Pages/PhotoPage';
import { UserProfile } from '../../Pages/User/UserProfile';
import { NotFounds } from '../../Pages/NotFounds';

export const Routess = () => {

 
  return (
    
    <Routes>
       <Route path="/" element={<Home/> }/> 
       <Route path="login/*" element={<Login/>}/> 
       <Route path="conta/*" element={<ProtectRoute> <User/> </ProtectRoute>}/> 
       <Route path="foto/:id" element={<PhotoPage/>}/> 
       <Route path="perfil/:user" element={<UserProfile/>}/>  
       <Route path="*" element={<NotFounds/>}/>; 
       

    </Routes>
      
  )
}
