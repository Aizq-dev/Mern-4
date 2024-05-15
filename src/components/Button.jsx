import React from 'react'
import { ButtonStyled } from './ui/ButtonStyled'
const Button = ({text,background}) => {
return (
<ButtonStyled background={background}>{text}</ButtonStyled>
  )
}

export default Button