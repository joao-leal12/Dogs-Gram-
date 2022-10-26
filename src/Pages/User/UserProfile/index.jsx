import React from 'react'
import { useParams } from 'react-router-dom'
import {Feed} from '../../../Components/Feed'; 
import { Head } from '../../../Components/Helper/Head'; 
export const UserProfile = () => {
  const {user} = useParams(); 

  
    return (
    <section >
        <Head title={user}/>
        <h1 classNam="title">{user}</h1>
        <Feed user={user}/> 
    </section>
  )
}

