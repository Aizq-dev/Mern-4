import { MainStyled } from "../ui/Main/MainStyled";
import React from "react";
import { primary } from "../ui/colors";
import CardTitle from "./Cards/CardTitle";

import Card from "./Cards/Card";
import { DivCard } from "../ui/Main/CardStyled";
import { ReviewDiv } from "./ReviewDiv";
import { ToCatalogo } from "./ToCatalogo";
import Title from "./title";
import { cardContain } from "./Cards/CardsContain";

const Main = () => {
  return (
    <MainStyled>
      <CardTitle side={"TextLeft"} data-testid="CardTitle" />
      <Title />
      {cardContain.map((i,index) => (
        <Card
          key={index}
          data-testid={`Card${i}`}
          title={i.title}
          text={i.text}
          img={i.img}
          alt={i.alt}
          side={i.side}
        />
      ))}
      <DivCard backgroundColor={"primary"}></DivCard>
      <ReviewDiv
        title={'"Pistacchio ha cambiado mi forma de disfrutar de un dulce."'}
        name={"Flor Abril."}
        backgroundColor={primary}
        color={"white"}
      />
      <ToCatalogo
        title={"Prueba nuestra bolleria."}
        text={
          "“Qué increíble descubrimiento. La comida de Pistacchio es simplemente deliciosa y perfecta para cuidar mi dieta.” - Adrian Izquierdo."
        }
        button={"Ver Catálogo"}
        background={primary}
      />
    </MainStyled>
  );
};

export default Main;
