import React from 'react'
import {StyleFooter} from './styles';
import {ReactComponent as Dogs} from '../../assets/dogs-footer.svg'; 
export const Footer = () => {
  return (
    <StyleFooter>
      <Dogs /> 
      <p>Dogs. alguns direitos reservados</p>

    </StyleFooter>
  )
}
