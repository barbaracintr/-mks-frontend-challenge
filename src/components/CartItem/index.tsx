import { ProductItem, Img, Name, BoxBtn, BtnAddLess, Qtd, Price, BtnRemoveProduct } from "./styles";
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../store/reducers/cart';

export const CartItem = ({ productItem }: any) => {

  const dispatch = useDispatch();

  return (
    <ProductItem>
      <Img src={productItem?.photo} />
      <Name>{productItem?.name}</Name>

      <BoxBtn>
        <BtnAddLess
          onClick={() =>
            dispatch(decrementQuantity(productItem.id))}>
          -
        </BtnAddLess>
        <Qtd>{productItem.quantity}</Qtd>
        <BtnAddLess
          onClick={() =>
            dispatch(incrementQuantity(productItem.id))}>
          +
        </BtnAddLess>
      </BoxBtn>

      <Price>R&#36; {productItem?.price}</Price>

      <BtnRemoveProduct
        onClick={() => dispatch
          (removeItem(productItem.id))}>
        <span className="material-symbols-outlined">
          cancel
        </span>
      </BtnRemoveProduct>
    </ProductItem>
  );
};