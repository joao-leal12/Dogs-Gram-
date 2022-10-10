import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Global } from '../../../GlobalContext/useContext';
 const ProtectRoute = ({children}) => {

  const {login} = useContext(Global)

   if(login) return children; 
   else if(!login) return <Navigate to="/login"/> 
   else return null; 

  }
 

export default ProtectRoute; 