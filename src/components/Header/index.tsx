import { HearderBox, Logo, Title, ButtonCart } from "./styles";
import { useProSidebar } from 'react-pro-sidebar';
import { useState } from 'react';
import { SidebarBox } from "../SidebarBox";

export const Header: React.FC = () => {

  const { collapseSidebar } = useProSidebar();
  const [open, setOpen] = useState(false);

  function openCart() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }

    collapseSidebar()
  };

  return (
    <HearderBox>
      <Logo>
        <Title primary>MKS</Title>
        <Title primary={false}>Sistemas</Title>
      </Logo>

      {open ?
        <SidebarBox openCart={openCart} />
        :
        <ButtonCart primary onClick={openCart}>
          <span className="material-symbols-outlined">
            shopping_cart
          </span>
        </ButtonCart>}
    </HearderBox>
  );
};