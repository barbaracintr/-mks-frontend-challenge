import { Box, ButtonCart } from "./styles";
import { Sidebar } from 'react-pro-sidebar';
import { Cart } from "../Cart";

export const SidebarBox = ({ openCart }: any) => {

    return (
        <Box>
            <Sidebar
                width={"460px"}
            >
                <div>
                    <ButtonCart
                        primary={false}
                        onClick={openCart}>
                        <span className="material-symbols-outlined">
                            keyboard_double_arrow_right
                        </span>
                    </ButtonCart>
                    <Cart />
                </div>
            </Sidebar>
        </Box>
    );
};