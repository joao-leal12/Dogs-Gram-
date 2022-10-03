import React from 'react'
import {Inputt, Label, Wrapper, Error} from './styles';  

export const Input = ({type,id,label, value, handleChange, error, onBlur }) => {

  return (
    <Wrapper>
        <Label htmlFor={id}>{label}</Label> 
         <Inputt 
            type={type} 
            id={id} 
            value={value}
            onChange={handleChange}  
            onBlur={onBlur} 

         />
        {error && <Error>{error}</Error>} 
    </Wrapper>
  )
}
