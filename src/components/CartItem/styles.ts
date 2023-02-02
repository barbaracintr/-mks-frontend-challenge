import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const ProductItem = styled.li`
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 379px;
    
    @media only screen and (max-width: 600px) {
        gap: 0.2rem;
        width: 250px;
    } 
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
export const Img = styled.img`
    height: 57px;
    width: 46px;
    margin: 5px;

    @media only screen and (max-width: 600px) {
        height: 95px;
        width: 80px;
        border-radius: 0px;
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
    
    @media only screen and (max-width: 600px) {
        height: 21.445236206054688px;
        width: 211px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: center;
    } 
`;
export const BoxBtn = styled.div`
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

    @media only screen and (max-width: 600px) {
        min-width: 18vw;
        max-width: 18vw; 
        height: 32px; 
    }
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

    @media only screen and (max-width: 600px) {
        font-size: 15px;
    } 
`;
export const BtnRemoveProduct = styled.button`
    height: 18px;
    width: 18px;
    border: none;
    background: none;
    color: #000;
    display: flex;
    align-self: start;

    @media only screen and (max-width: 600px) {
        align-self: end;
    } 
    @media only screen and (max-width: 600px) {
        align-self: end;
    }
`;