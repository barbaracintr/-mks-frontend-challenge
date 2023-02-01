import { useSelector } from 'react-redux'
import { TotalBox } from './styles'

export const Total: React.FC = () => {

  const cart = useSelector((state: any) => state.cart.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item: any) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return { totalPrice, totalQuantity }
  }

  return (
    <TotalBox>
      Total
      ({getTotal().totalQuantity} items)
      :
      <span>R&#36; {getTotal().totalPrice.toFixed(2)}</span>
    </TotalBox>
  );
};