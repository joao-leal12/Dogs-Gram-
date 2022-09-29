import React from 'react'
import {LoginForm} from '../../Components/Form/LoginForm'
import {LoginCreate} from '../../Components/Form/LoginCreate'
import {LoginPasswordLost} from '../../Components/Form/LoginPasswordLost'
import {LoginPasswordReset} from '../../Components/Form/LoginPasswordReset'
import { Routes, Route } from 'react-router-dom';
export const Login = () => {
  return (
    <div>
 
      <Routes>
       
        <Route path="/" element={<LoginForm/>}/>
        <Route path="criar" element={<LoginCreate/> }/>  
        <Route path="perdeu" element={<LoginPasswordLost/> }/> 
        <Route path="resetar" element={<LoginPasswordReset/> }/>  
    
      </Routes>
    </div>
  )
}
