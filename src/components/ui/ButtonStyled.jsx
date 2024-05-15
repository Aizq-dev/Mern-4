import styled from "styled-components";
import { secundary,primary, tertiary} from "./colors";
export const ButtonStyled = styled.button`
background-color: ${props=> props.background === primary ? primary:  secundary};
color: black;
font-size: 20px;
border:0;
padding: 10px 10px;
margin: 10px;
border-radius: 6%;
&:hover{
    background-color:${tertiary};
}
cursor: pointer;
`