import React, { useEffect } from 'react'
import { ModalContainer } from './styles'
import {UseFetch} from '../../../Hooks/UseFetch'; 
import { PHOTO_GET } from '../../../Api/api';
import { Erro } from '../../Helper/Erro'; 
import { Loading } from '../../Helper/Loading'; 
import { PhotoContent } from '../../Photo/PhotoContent';
export const FeedModal = ({photo}) => {
  const {data, error, loading, request } = UseFetch(); 
      console.log(data); 
    useEffect(() => { 

        const {url, options} = PHOTO_GET(photo.id); 
        request(url, options )
    }, [photo, request]) 

  return (
    <ModalContainer>
        {error && <Erro error={error}/>}
        {loading && <Loading/>}
        {data && <PhotoContent data={data}/> }
    </ModalContainer>
  )
}
