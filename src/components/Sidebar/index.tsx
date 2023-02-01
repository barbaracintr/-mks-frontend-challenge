import { Cart } from "../Cart";
import { Drawer } from "@mui/material";
import "./styles";

export const Sidebar = ({ openCart }: any) => {

  return (
    <>
      <Drawer
        open
        onClose={openCart}
        anchor={"right"}
        elevation={10}
      >
        <Cart />
      </Drawer>
    </>
  );
};