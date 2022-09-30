import React from 'react'
import {Inputt, Label, Wrapper, Error} from './styles';  

export const Input = ({type,id,label }) => {
  return (
    <Wrapper>
        <Label htmlFor={id}>{label}</Label> 
         <Inputt 
            type={type} 
            id={id}
         />
      
    </Wrapper>
  )
}
