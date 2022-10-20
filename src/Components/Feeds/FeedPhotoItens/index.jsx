import React from 'react'
import {ChildListPhotos} from './styles'; 
import {Image} from '../../Helper/Image'; 
export const FeedPhotosItens = ({photo, setModalPhoto }) => {
  function handleClick() { 

    setModalPhoto(photo); 
  }

  return (
    <ChildListPhotos onClick={handleClick}>
      
      <Image src={photo.src} alt={photo.title}/> 
      <span>{photo.acessos}</span>

    </ChildListPhotos>
  )
}
