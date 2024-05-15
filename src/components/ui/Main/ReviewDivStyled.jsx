import styled from "styled-components";
import { primary } from "../colors";
export const ReviewDivStyled = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.backgroundColor? props.backgroundColor : null};
padding: 20px;
color: ${props => props.color? props.color : "black"};
`



