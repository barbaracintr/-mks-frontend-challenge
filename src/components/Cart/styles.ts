import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const CartBox = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    background: #0F52BA;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        justify-content: space-between;
        overflow: auto;
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {       
        height: 100%;
    }
`;
export const ProductList = styled.ul`
    height: 60vh;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    padding: 10px;
`;
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 33px;
    color: #FFFFFF;
    padding: 15px;
`;
export const ButtonFinish = styled.button`
    height: 97px;
    width: 100%;
    background: #000;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    border: none;
`;

