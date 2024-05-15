import React from 'react'
import Button from "../../Button";

import {
    DivCard,
    DivCardImg,
    DivCardText,
    H1CardTitle,
    ImgCard,
  } from "../../ui/Main/CardStyled";
  import { primary } from '../../ui/colors';
const CardTitle = ({side}) => {
  return (
    <DivCard >
        <DivCardText>
          <H1CardTitle>Pistacchio - Deliciosa bollería saludable</H1CardTitle>
          <p>
            Disfruta de brownies saludables para darte un capricho sin romper la
            dieta.¡Pedido a domicilio o para recoger!
          </p>
          <Button text={"Ver Catálogo"}  background={primary} />

          <p>⭐⭐⭐⭐⭐ | Fitness | Saludable</p>
          <blockquote>
            <p>"¡Deliciosos y saludables a la vez!"</p>
            <cite>Diego Abril.</cite>
          </blockquote>
        </DivCardText>
        <DivCardImg side={side}>
          <ImgCard
            src={"Imagen1.jpg"}
            alt={"Imagen Presentación"}
            side={"rigth"}
          />
        </DivCardImg>
      </DivCard>
  )
}

export default CardTitle