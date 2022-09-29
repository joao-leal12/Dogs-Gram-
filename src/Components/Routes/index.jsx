import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../../Pages/Login'
import { Home} from '../../Pages/Home'; 
export const Routess = () => {
    
  return (
    
    <Routes>
       
       <Route path="/" element={<Home/> }/> 
       <Route path="login/*" element={<Login/>}/>

    </Routes>
  )
}
