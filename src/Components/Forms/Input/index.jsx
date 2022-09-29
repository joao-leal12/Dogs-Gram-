import React from 'react'
import {Inputt, Label, Wrapper, Error} from './styles';  

export const Input = ({type,value, id,handleChange, label, ...rest}) => {
  return (
    <Wrapper>
        <Label htmlFor={id}>{label}</Label> 
         <Inputt 
            type={type} 
            value={value} 
            id={id} 
            onChange={handleChange} 
            {...rest} 
         />
        <Error>Erro</Error>
    </Wrapper>
  )
}
