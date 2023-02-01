import { HearderBox, Logo, Title, ButtonCart } from "./styles";
import { useState } from 'react';
import { Sidebar } from "../Sidebar";

export const Header: React.FC = () => {

  const [open, setOpen] = useState(false);

  function openCart() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
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
        </ButtonCart>}
    </HearderBox>
  );
};