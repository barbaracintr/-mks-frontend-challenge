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
`;
export const Logo = styled.h1`
    color: #FFFFFF;
    margin: 1rem;
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
  `}
`;