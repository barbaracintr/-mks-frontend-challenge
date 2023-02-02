import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Total } from ".";
import { store } from "../../store";
import '@testing-library/jest-dom';

test('Verificar se a soma total é nula ao iniciar a aplicação', () => {

    render(
    <Provider store={store}>
        <Total />
    </Provider>
    )

    const sumTotal = screen.queryByTestId('total-sum');
    expect(sumTotal).toBeNull()  
});