import styled from 'styled-components';
import * as muiStyles from '@mui/material/styles';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    
    @media only screen and (max-width: 600px) {
        height: 100%;
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
        height: 100%;
        overflow: hidden;
    }
`;
export const Text = styled.p`
    text-align: center;
`;