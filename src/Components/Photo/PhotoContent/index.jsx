import React, { useContext } from 'react'
import {ContentPhoto,
    
    ContainerImg, 
     ContainerDetails, 
     Details, 
     Visualization, 
     Title, 
     Atributes,
     Author
    } from './styles';  
import { PhotoComments } from '../PhotoComments';
import { Link } from 'react-router-dom';
import { Global } from '../../../GlobalContext/useContext';
import { PhotoDelete } from '../PhotoDelete'; 
import { Image } from '../../Helper/Image';
export const PhotoContent = ({data}) => {
    const {photo, comments} = data;    
    const user = useContext(Global); 

  


    return (
    <ContentPhoto>
     
        <ContainerImg> 
           
            <Image src={photo.src} alt={photo.title}/> 
           


        </ContainerImg>
        <ContainerDetails>
            <Details>
                <Author>
                    {user.data && user.data.username == photo.author ? (<PhotoDelete id={photo.id}/>) : 
                    (
                      <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> 
                    )}
                </Author>
                <Visualization className="visualizações">{photo.acessos}</Visualization>
                <Title className="title">

                    <Link to={`/foto/${photo.id}`}>{photo.title}</Link>

                </Title> 
                <Atributes>

                    <li>{photo.peso} kg</li> 
                    <li>{photo.idade} anos</li>
                </Atributes>
                
            </Details>

        </ContainerDetails>  
        <PhotoComments id={photo.id} comments={comments}/>  
    </ContentPhoto>
  )
}
