import React from 'react'
import { Titlestyled } from '../ui/Main/titlestyled'
import { primary } from '../ui/colors'
import { H1,Text } from '../ui/TextStyled'
const Title = () => {
  return (
    <Titlestyled>  <H1 color={primary}>Bolleria saludable a tu alcance</H1>
    <Text color={primary}>Deliciosa bolleria sin culpa para los amantes del fitness</Text></Titlestyled>
  )
}

export default Title