import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const ProductItem = styled.li`
    min-height: 10vh;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 320px;
    
    img {
        height: 57px;
        width: 46px;
        margin: 5px;
    }
    div {
        height: 19px;
        min-width: 50px;
        max-width: 50px;
        border-radius: 4px;
        background: #FFFFFF;
        border: 0.3px solid #BFBFBF;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;
export const Name = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    height: 33px;
    width: 113px;
`;
export const BoxBtn = styled.div`
`;
export const BtnAddLess = styled.button`
    border: none;
    background: none;
`;
export const Qtd = styled.span`
    font-size: 10px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
`;
export const Price = styled.span`
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
`;
export const BtnRemoveProduct = styled.button`
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    color: #000;
    display: flex;
    align-self: start;
`;