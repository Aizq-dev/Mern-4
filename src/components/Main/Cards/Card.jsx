import React from "react";
import {
  DivCard,
  DivCardImg,
  DivCardText,
  H1Card,
 
  ImgCard,
} from "../../ui/Main/CardStyled";
import { Text } from "../../ui/TextStyled";
const Card = ({title, text, img, alt, side }) => {
  return side === "TextLeft" ? (
    <DivCard>
      <DivCardText><H1Card>{title}</H1Card><Text>{text}</Text></DivCardText>
      <DivCardImg side={side}><ImgCard src={img} alt={alt}/></DivCardImg>
    </DivCard>
  ) : (
    <DivCard>
      <DivCardImg side={side}><ImgCard src={img} alt={alt}/></DivCardImg>
      <DivCardText><H1Card>{title}</H1Card><Text>{text}</Text></DivCardText>
    </DivCard>
  );
};

export default Card;
