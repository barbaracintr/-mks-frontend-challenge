import { Item, Box, Name, Price, Description, ButtonBuy } from "./styles";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../store/reducers/cart";

export const Product = ({ productProps }: any) => {

  const dispatch = useDispatch()

  return (
    <Item id={productProps.id} >
      <img src={productProps.photo} />
      <Box>
        <Name>{productProps.name}</Name>
        <Price>R&#36;	{productProps.price}</Price>
      </Box>
      <Description>{productProps.description}</Description>

      <ButtonBuy
        onClick={() =>
          dispatch(addToCart(
            productProps
          ))
        }>
        <span className="material-symbols-outlined">
          local_mall
        </span>
        Comprar
      </ButtonBuy>
    </Item>
  );
};