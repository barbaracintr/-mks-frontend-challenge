import styled from 'styled-components';
import * as muiStyles from "@mui/material/styles";

export const Item = styled.li`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 250px;
    width: 217px;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    padding: 10px 10px 0 10px;
    gap: 5px;
    
    img {
        height: 138px;
        width: 111px;
    }
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
`;
export const Name = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
    font-style: normal;
    color: #2C2C2C;
    width: 120px;
`;
export const Price = styled.span`
    font-size: 10px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;
    background: #373737;
    border-radius: 5px;
    color: #FFFFFF;
    padding: 3px;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Description = styled.p`
    height: 25px;
    width: 192px;
    font-size: 12px;
    font-weight: 300;
    line-height: 12px;
    text-align: left;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 

    @media only screen and (max-width: 600px) {
        font-size: 10px;
    }
`;
export const ButtonBuy = styled.button`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #FFFFFF;
    height: 31px;
    width: 218px;
    background: #0F52BA;
    border: none;
    border-radius: 0px 0px 8px 8px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span {
        background: none;
    }
`;