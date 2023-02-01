import styled, {css} from 'styled-components';
import * as muiStyles from '@mui/material/styles';

interface StyledProps {
    primary: boolean | null
}

export const HearderBox = styled.header`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: #0F52BA;

    // div {
    //     display: flex;
    //     border-radius: 10px 0 0 10px;
    // }

    @media only screen and (max-width: 600px) {
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
    }
`;
export const Box = styled.div`
    min-height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: #0F52BA;
    display: flex;
    border-radius: 10px 0 0 10px;
`;
export const Logo = styled.h1`
    color: #FFFFFF;
    margin: 1rem;

    @media only screen and (max-width: 600px) {
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
    }
`;
export const Title = styled.span<StyledProps>`
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0px;
    padding: 4px;

    ${props => props.primary && css`
        font-size: 40px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0px;
    `}
`;
export const ButtonCart = styled.button<StyledProps>`
    width: 1vw;
    background: none;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    border: none;

  ${props => props.primary && css`
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    margin: 1rem;

    @media only screen and (max-width: 600px) {
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
    }
  `}
`;