import React from 'react'
import { useParams } from 'react-router-dom'
import {Feed} from '../../../Components/Feed'; 
export const UserProfile = () => {
  const {user} = useParams(); 

  
    return (
    <section >
        <h1 classNam="title">{user}</h1>
        <Feed user={user}/> 
    </section>
  )
}

