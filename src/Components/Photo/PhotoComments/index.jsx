import React, {useContext}from 'react'
import { Global } from '../../../GlobalContext/useContext'; 
import { PhotoCommentsForm } from '../PhotoCommentsForm';
export const PhotoComments = (props) => {
  const {login} = useContext(Global); 

  return (
    <div>
      {login && <PhotoCommentsForm id={props.id}/> }
    </div>
  )
}
