import React, {useContext} from 'react'
import {LoginForm} from '../../Components/Form/LoginForm'
import {LoginCreate} from '../../Components/Form/LoginCreate'
import {LoginPasswordLost} from '../../Components/Form/LoginPasswordLost'
import {LoginPasswordReset} from '../../Components/Form/LoginPasswordReset'
import { Routes, Route, Navigate } from 'react-router-dom'; 
import {Global} from '../../GlobalContext/useContext' 
import { Section, FormsContainer } from './styles'
import { NotFounds } from '../NotFounds'
export const Login = () => {
  const {login} = useContext(Global); 

   
  if(login) return <Navigate to="/conta"/>
  return (
    <Section>
      <FormsContainer>
        <Routes>
        
          <Route path="/" element={<LoginForm/>}/>
          <Route path="criar" element={<LoginCreate/> }/>  
          <Route path="perdeu" element={<LoginPasswordLost/> }/> 
          <Route path="resetar" element={<LoginPasswordReset/> }/>  
          <Route path="*" element={<NotFounds/> }/>  
      
      
        </Routes>
      </FormsContainer>
    </Section>
  )
}
