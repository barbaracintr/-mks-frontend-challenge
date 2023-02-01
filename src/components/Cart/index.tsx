import { CartBox, ProductList, Title, ButtonFinish } from "./styles";
import { useSelector } from 'react-redux';
import { CartItem } from "../CartItem";
import { Total } from "../Total";

export interface ProductProps {
  brand: string,
  createdAt: string,
  description: string,
  id: number,
  name: string,
  photo: string,
  price: string,
  quantity: number,
  updatedAt: string
}

export const Cart: React.FC = () => {

  const cart = useSelector((state: any) => state.cart.cart);

  return (
    <CartBox>
      <Title>Carrinho de compras</Title>

      <ProductList>
        {cart.map((item: ProductProps) =>
          <CartItem key={item.id} productItem={item} />)}
      </ProductList>

      <Total />
      <ButtonFinish>Finalizar Compra</ButtonFinish>
    </CartBox>
  );
};