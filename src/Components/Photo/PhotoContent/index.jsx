import React from 'react'
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
export const PhotoContent = ({data}) => {
    const {photo, comments} = data;  
    return (
    <ContentPhoto>
     
        <ContainerImg> 

            <img src={photo.src} alt={photo.title}/>  


        </ContainerImg>
        <ContainerDetails>
            <Details>
                <Author>
                   
                    <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> 

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
