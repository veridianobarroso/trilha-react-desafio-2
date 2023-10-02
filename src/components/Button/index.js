import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Adicionar
    </ButtonContainer>
  )
}

export default Button
