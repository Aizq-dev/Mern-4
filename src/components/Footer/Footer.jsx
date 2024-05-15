import React from 'react'
import { FooterStyled, RigthsStyled } from '../ui/Footer/FooterStyled'
import { Link } from '../ui/Footer/LinksStyled'
const Footer = () => {
  return (
    <FooterStyled>
        <Link text={"Homepage"}/>
        <div>
        <Link img={"/public/facebook.png"} alt={"Facebook"}/>
        <Link img={"/public/instagram.png"} alt={"Instagram"}/>
        <Link img={"/public/x.png"} alt={"Twitter"}/>        
        </div>
        <RigthsStyled>@All rights reserved.</RigthsStyled>

    </FooterStyled>
  )
}

export default Footer