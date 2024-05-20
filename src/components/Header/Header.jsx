import React from 'react'
import Button from '../Button'
import { Logo } from './Logo'
import { HeaderWrapper, LogoName } from '../ui/Header/HeaderStyled'
import {H2,H3} from '../ui/TextStyled'
import { primary, secundary } from '../ui/colors'

const Header = () => {

  return (
    <HeaderWrapper>
    <LogoName data-testid="HeaderTitle">
        <Logo src={"logo.jpg"} alt={"Logo"}/>
        <H2 color='white' >Pistacchio </H2><H3>Healthy Food</H3>
    </LogoName>
    <div>
        <Button text={"Ver Catálogo"} background={secundary}/>
       
    </div></HeaderWrapper>
  )
}

export default Header