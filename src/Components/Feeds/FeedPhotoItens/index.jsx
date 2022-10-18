import React from 'react'
import {ChildListPhotos} from './styles'; 
export const FeedPhotosItens = ({photo, setModalPhoto }) => {
  function handleClick() { 

    setModalPhoto(photo); 
  }

  return (
    <ChildListPhotos onClick={handleClick}>
      
      <img src={photo.src} alt={photo.title}/> 
      <span>{photo.acessos}</span>

    </ChildListPhotos>
  )
}
