import { ReviewDivStyled } from "../ui/Main/ReviewDivStyled";
import { H2, Text } from "../ui/TextStyled";

export const ReviewDiv = ({title,name,backgroundColor, color})=>{
return <ReviewDivStyled backgroundColor = {backgroundColor}><blockquote><H2 color={color}>{title}</H2><cite><Text color={color}>{name}</Text></cite></blockquote></ReviewDivStyled>

}