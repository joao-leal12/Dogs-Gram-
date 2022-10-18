import React from 'react'
import {ContentPhoto, ContainerImg, ContainerDetails} from './styles'; 
import { Link } from 'react-router-dom';
export const PhotoContent = ({data}) => {
    const {photo, comment} = data; 
    return (
    <ContentPhoto>
     
        <ContainerImg> 

            <img src={photo.src}/>  


        </ContainerImg>
        <ContainerDetails>
            <div>
                <p>
                    <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link> 

                </p>
                <span className="visualizações">{photo.acessos}</span>
                <h1 className="title">

                    <Link to={`/foto/${photo.id}`}></Link>

                </h1> 
                <ul className='atributes'>

                    <li>{photo.peso} kg</li> 
                    <li>{photo.idade} anos</li>
                </ul>
                
            </div>

        </ContainerDetails> 
    </ContentPhoto>
  )
}
