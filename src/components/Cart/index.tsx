import { CartBox, ProductList, Title, ButtonFinish } from "./styles";
import { useSelector } from 'react-redux';
import { CartItem } from "../CartItem";
import { Total } from "../Total";

export const Cart: React.FC = () => {

  const cart = useSelector((state: any) => state.cart);

  return (
    <CartBox >
      <Title>Carrinho de compras</Title>

      <ProductList>
        {cart.cart.map((item: any) =>
          <CartItem key={item.id} productItem={item} />)}
      </ProductList>

      <Total />
      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </CartBox>
  );
};