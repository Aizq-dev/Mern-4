import styled from "styled-components";
import { mobile } from "../../../styles/medias";

export const LogoStyled = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  ${mobile} {
    height: 70px;
    width: 70px;
  }
`;
