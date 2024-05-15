import Button from "../Button"
import { ToCatalogoStyled } from "../ui/Main/ToCatalogoStyled"
import { ReviewDiv } from "./ReviewDiv"

export const ToCatalogo = ({title, text, button, background})=>{
   return( <ToCatalogoStyled>
<ReviewDiv title={title} name={text}></ReviewDiv>
<Button text={button} background={background}/>

</ToCatalogoStyled>)

}