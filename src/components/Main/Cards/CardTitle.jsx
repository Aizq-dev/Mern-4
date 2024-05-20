import React from 'react'
import Button from "../../Button";

import {
    DivCard,
    DivCardText,
    H1CardTitle
  } from "../../ui/Main/CardStyled";
  import { DivCardImg } from './DivCardImg';
  import { ImgCard } from '../../ui/Main/ImgCard';
  import { primary } from '../../ui/colors';
const CardTitle = ({side}) => {
  return (
    <DivCard >
        <DivCardText>
          <H1CardTitle>Pistacchio - Deliciosa bollería saludable</H1CardTitle>
          <p data-testid="p1">
            Disfruta de brownies saludables para darte un capricho sin romper la
            dieta.¡Pedido a domicilio o para recoger!
          </p>
          <Button text={"Ver Catálogo"}  background={primary} />

          <p data-testid="p2">⭐⭐⭐⭐⭐ | Fitness | Saludable</p>
          <blockquote>
            <p data-testid="p-review">"¡Deliciosos y saludables a la vez!"</p>
            <cite data-testid="author">Diego Abril.</cite>
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