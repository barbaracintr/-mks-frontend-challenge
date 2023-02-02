import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Header } from ".";
import { store } from "../../store";
import '@testing-library/jest-dom';

test('Aparecer carrinho ao clicar no botão cart', async () => {

    render(
    <Provider store={store}>
        <Header />
    </Provider>
    )

    const button = screen.getByRole('button')
    
    await fireEvent.click(button) 
   
    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument()
});