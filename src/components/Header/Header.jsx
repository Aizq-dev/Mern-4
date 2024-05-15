import React from 'react'
import Button from '../Button'
import { Logo } from './Logo'
import { H2, H3, HeaderWrapper, LogoName } from '../ui/Header/HeaderStyled'

const Header = () => {
  return (
    <HeaderWrapper>
    <LogoName>
        <Logo src={"logo.jpg"} alt={"Logo"}/>
        <H2 color='white' >Pistacchio</H2><H3>Healthy Food</H3>
    </LogoName>
    <div>
        <Button text={"Ver Catálogo"}/>
       
    </div></HeaderWrapper>
  )
}

export default Header