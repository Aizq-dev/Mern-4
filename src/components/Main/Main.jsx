import { MainStyled } from "../ui/Main/MainStyled";
import React from "react";
import { primary } from "../ui/colors";
import CardTitle from "./Cards/CardTitle";

;
import Card from "./Cards/Card";
import { DivCard } from "../ui/Main/CardStyled";
import { ReviewDiv } from "./ReviewDiv";
import { ToCatalogo } from "./ToCatalogo";
import Title from "./title";

const Main = () => {
  return (
    <MainStyled>
      <CardTitle side={"TextLeft"}/>
    <Title/>
      <Card
        title={"Disfruta sin remordimientos."}
        text={
          "Con Pistacchio, puedes disfrutar de bolleria deliciosa sin preocuparte por romper tu dieta. Saborea cada bocado sin remordimientos."
        }
        img={"Imagen2.jpg"}
        alt={"Deliciosa bolleria"}
        side={"TextLeft"}
      />
      <Card title={"Ingredientes saludables."} text={"Nuestra bolleria  está hechos con ingredientes saludables, ideales para personas fitness que buscan opciones deliciosas y nutritivas."}
       img={"Imagen3.jpg"}
       alt={"Deliciosa bolleria"}
       side={"TextRigth"}
      />
       <Card title={"Variedad de sabores."} text={"Descubre una amplia variedad de sabores en nuestra bollrtis, desde clásicos hasta opciones más creativas. Siempre frescos y deliciosos."}
       img={"Imagen4.jpg"}
       alt={"Deliciosa bolleria"}
       side={"TextLeft"}
      />
      <DivCard backgroundColor={"primary"}></DivCard>
      <ReviewDiv title={'"Pistacchio ha cambiado mi forma de disfrutar de un dulce."'} name={"Flor Abril."}backgroundColor={primary} color={"white"}/>
      <ToCatalogo title={"Prueba nuestra bolleria."} text={"“Qué increíble descubrimiento. La comida de Pistacchio es simplemente deliciosa y perfecta para cuidar mi dieta.” - Adrian Izquierdo."}
      button={"Ver Catálogo"} background={primary}
      />
    </MainStyled>

  );
};

export default Main;
