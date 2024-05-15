import styled from "styled-components";
import { mobile, tablet } from "../../styles/medias";
export const Text = styled.p`
    font-size: 20px;
    color: ${props => props.color ? props.color : "black"};  
    ${tablet}{font-size: 18px;}
  ${mobile}{font-size: 15px;}
`
export const H1 = styled.h1`
  font-size: 50px;
color: ${props => props.color ? props.color : "black"};  
${tablet}{font-size: 30px;}
  ${mobile}{font-size: 20px;}
`
export const H2 = styled.h1`
  font-size: 30px;
color: ${props => props.color ? props.color : "black"}; 
${tablet}{font-size: 20px;}
  
`


export const H3 = styled.h3`
font-weight: bold;
${mobile}{display:none}
`