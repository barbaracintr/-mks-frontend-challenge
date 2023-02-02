import { HearderBox, Logo, Title, ButtonCart } from "./styles";
import { useState } from 'react';
import { Sidebar } from "../Sidebar";
import { useSelector } from "react-redux";

export const Header: React.FC = () => {

  const cart = useSelector((state: any) => state.cart.cart);
  const [open, setOpen] = useState<boolean>(false);

  function openCart() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  };

  const getTotal = () => {
    let totalQuantity = 0
    cart.forEach((item: any) => {
      totalQuantity += item.quantity
    })
    return { totalQuantity }
  };

  return (
    <HearderBox>
      <Logo>
        <Title primary>MKS</Title>
        <Title primary={false}>Sistemas</Title>
      </Logo>

      {open ?
        <Sidebar openCart={openCart} />
        :
        <ButtonCart onClick={openCart}>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
          <span>{getTotal().totalQuantity}</span>
        </ButtonCart>
      }
    </HearderBox>
  );
};