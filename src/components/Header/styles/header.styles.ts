import styled from 'styled-components';
import { device } from '../../../styles/app.styles';

export const SHeader = styled.div`
    display: grid;
    grid-template-rows: 30% 33% 33%;
    grid-template-columns: 100%;
    grid-gap: 5px;
    height: 200px;
    width: 98%;
    margin: 0 auto;
    @media ${device.mobileM} {
        grid-template-rows: 30% 40% 20%;
    }
`;
export const SInput = styled.input`
    border-radius: 15px;
    border: none;
    margin: 5px;
    padding: 0 15px;
    font-size: 20px;
    text-align: center;
    
`;
