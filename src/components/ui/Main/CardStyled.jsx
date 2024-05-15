
import styled from "styled-components";
import { secundary } from "../colors";
import { tablet, mobile } from "../../../styles/medias";
export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: ${secundary};
  width: 100%;
  gap: 10px;

`;
export const DivCardText = styled.div`
  width: 50%;
`;
export const DivCardImgStyled = styled.div`
  width: 50%;
  padding: 40px 0;
  display: flex;
  justify-content: ${props => props.side === "TextLeft" ? 'end' : 'start'};
  align-items: center;
`;
export const H1CardTitle = styled.h1`
  font-size: 70px;
  font-weight: bolder;
  ${tablet}{font-size: 50px;}
  ${mobile}{font-size: 30px}
`;
export const H1Card = styled.h1`
  font-size: 40px;
  font-weight: bolder;
  ${tablet}{font-size: 30px;}
  ${mobile}{font-size: 20px}
`

export const ImgCardStyled = styled.img`
    height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 8%;
  ${tablet}{height: 300px;
  width: 300px;}
  ${mobile}{height: 200px;
  width: 200px;}
`;

export const DivCardImg = ({side, children}) =>{
return <DivCardImgStyled side={side}>{children}</DivCardImgStyled>

}
export const ImgCard = ({ src, alt, side }) => {
  return <ImgCardStyled src={src} alt={alt} side={side}></ImgCardStyled>;
};
