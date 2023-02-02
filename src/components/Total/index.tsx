import { useSelector } from 'react-redux';
import { TotalBox } from './styles';

export const Total: React.FC = () => {

  const cart = useSelector((state: any) => state.cart.cart);

  const getTotal = () => {
    let totalPrice = 0
    cart.forEach((item: any) => {
      totalPrice += item.price * item.quantity
    })
    return { totalPrice }
  };

  return (
    <TotalBox>
      Total:
      <span id="total-sum"> R&#36; {getTotal().totalPrice.toFixed(2)}</span>
    </TotalBox>
  );
};