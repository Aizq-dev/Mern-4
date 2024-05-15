import styled from "styled-components";

export const Text = styled.p`
    font-size: 20px;
    color: ${props => props.color ? props.color : "black"};  
    ${tablet}{font-size: 15px;}
  ${mobile}{font-size: 10px;}
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
  ${mobile}{font-size: 10px;} 
`