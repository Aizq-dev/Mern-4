import React from 'react'
import { FooterStyled, RigthsStyled } from '../ui/Footer/FooterStyled'
import { Link } from '../ui/Footer/LinksStyled'
const Footer = () => {
  return (
    <FooterStyled>
        <Link text={"Homepage"}/>
        <div>
        <Link img={"facebook.png"} alt={"Facebook"}/>
        <Link img={"instagram.png"} alt={"Instagram"}/>
        <Link img={"x.png"} alt={"Twitter"}/>        
        </div>
        <RigthsStyled>@All rights reserved.</RigthsStyled>

    </FooterStyled>
  )
}

export default Footer