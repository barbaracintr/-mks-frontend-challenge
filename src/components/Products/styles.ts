import styled from 'styled-components';
import * as muiStyles from "@mui/material/styles";

export const BoxProductList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    align-content: center;
    overflow: auto;
    // height: 70vh;
    
    @media only screen and (max-width: 600px) {
        // margin: 1rem;
        // overflow-x: hidden;
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
    
    }
`;
export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;   
    // flex-wrap: wrap; 
    align-content: center;
    width: 60%;
    gap: 10px;
    // height: 80vh;

    @media only screen and (max-width: 600px) {
        // width: 100vw;
        // align-content: normal;
        margin: 10px;
        // flex-direction: column;   
    }
    
    @media screen and (min-width: 700px) and (max-width: 1240px) {
        flex-direction: row;
        flex-wrap: norap; 
   
    }
`;