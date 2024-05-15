import styled from "styled-components";
import { secundary } from "../colors";
export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 400px;
    background-color: ${secundary};
    padding: 0 20px;

`
export const RigthsStyled = styled.span`
    color: gray;
    font-size: 15px;
`