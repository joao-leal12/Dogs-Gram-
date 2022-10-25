import React from 'react'
import {Error} from './styles'; 
export const Erro = ({erro}) => {
  
    if(!erro) return null
    return (
        <Error>
             {erro}
        </Error>
  )
}
