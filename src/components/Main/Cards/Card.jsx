import React from "react";
import { DivCard, DivCardText, H1Card } from "../../ui/Main/CardStyled";
import { DivCardImg } from "./DivCardImg";
import { ImgCard } from "../../ui/Main/ImgCard";
import { Text } from "../../ui/TextStyled";
const Card = ({ title, text, img, alt, side }) => {
  return side === "TextLeft" ? (
    <DivCard>
      <DivCardText>
        <H1Card>{title}</H1Card>
        <Text>{text}</Text>
      </DivCardText>
      <DivCardImg side={side} data-testid="div-card-img">
        <ImgCard src={img} alt={alt} />
      </DivCardImg>
    </DivCard>
  ) : (
    <DivCard>
      <DivCardImg side={side} data-testid="div-card-img">
        <ImgCard src={img} alt={alt} />
      </DivCardImg>
      <DivCardText>
        <H1Card>{title}</H1Card>
        <Text>{text}</Text>
      </DivCardText>
    </DivCard>
  );
};

export default Card;
