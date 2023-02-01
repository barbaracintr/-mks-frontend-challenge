import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';
import { Paper } from "@mui/material"

export const CartBox = muiStyles.styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;
export const ProductList = styled.ul`
    height: 80vh;
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
    // width: 180px;
    padding: 15px;
    // display: flex;
    // algin-self: start;
    // margin-left: 30px;    
`;
export const ButtonFinish = styled.button`
    height: 97px;
    width: 486px;
    border-radius: 0px;
    background: #000;
    color: #fff;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    border-radius: 0 0 0 10px;
`;

