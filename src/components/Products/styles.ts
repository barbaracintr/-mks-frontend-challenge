import styled from 'styled-components';
import * as muiStyles from "@mui/material/styles";

export const BoxProductList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    align-content: center;
    overflow: auto;
`;
export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-wrap: wrap; 
    align-content: center;
    width: 60%;
    gap: 10px;
    margin: 0.5rem;

    @media only screen and (max-width: 600px) {
        margin: 10px;
    }
`;