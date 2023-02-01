import styled, {css} from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const Box = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        overflow: hidden;
        
        @media only screen and (max-width: 600px) {
            overflow-y: auto;
        }
    }

    @media only screen and (max-width: 600px) {
        overflow: auto;
        height: 100%;
    }
`;
export const ButtonCart = styled.button`
    width: 1vw;
    background: none;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    border: none;
    color: #fff;
`;