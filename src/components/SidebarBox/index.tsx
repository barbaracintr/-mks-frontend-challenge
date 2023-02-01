import { Box, ButtonCart } from "./styles";
import { Sidebar } from 'react-pro-sidebar';
import { Cart } from "../Cart";

export const SidebarBox = ({ openCart }: any) => {

    return (
        <Box>
            <Sidebar
                width={"600px"}
                backgroundColor={"#0F52BA"}
            >
                <div>
                    <ButtonCart
                        onClick={openCart}>
                        <span className="material-symbols-outlined">
                            cancel
                        </span>
                    </ButtonCart>
                    <Cart />
                </div>
            </Sidebar>
        </Box>
    );
};