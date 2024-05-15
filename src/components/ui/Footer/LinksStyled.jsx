import styled from "styled-components";
import { primary, quaternary, tertiary } from "../colors";

 const LinkStyled =styled.a`
    text-decoration: none;
    color: ${primary};
    cursor: pointer;
    padding: 10px;
    &:hover{
        color: ${quaternary}
    }
`


export const ImgLinkStyle = styled.img`
width:30px;
height: 30px;
`
export const ImgSocial =({src,alt})=>{
    return <ImgLinkStyle src={src} alt={alt}/>
}
export const Link = ({text, img, alt})=>{
return (<LinkStyled>
        {img? <ImgSocial src={img} alt={alt}/>: text} 

</LinkStyled>

)

}
