import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const CartBox = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    background: #0F52BA;
    overflow: hidden;
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
    margin: 2rem;
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