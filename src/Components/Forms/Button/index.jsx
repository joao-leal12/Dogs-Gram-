import React from 'react'
import {Buttonn} from './styles';  

export const Button = ({children, submit}) => {
  return (
    <Buttonn type={submit}>{children}</Buttonn>
  )
}
