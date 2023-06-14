import styled from 'styled-components';
import { device } from '../../../styles/app.styles';
import { SInput } from '../../../Common/input.ui';

export const SSearchAndFilterForm = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    justify-content: space-evenly;
    grid-row: 2;
	grid-column:1/span 3;
    width: 100%;
    @media ${device.mobileL} {
        grid-template-columns: 35% 65%;
    }
    @media ${device.mobileM} {
        grid-template-columns: 20% 60% 20%;
        grid-template-rows: 50% 50%;
        gap: 2px;
    }
`;
export const SSelect = styled.select`
    text-align: center;
    margin: 5px;
    border-radius: 15px;
    font-size: 18px;
    grid-column: 1;
    @media ${device.mobileL} {
        font-size: 14px;
    }
    @media ${device.mobileM} {
        font-size: 13px;
        grid-row: 1;
        grid-column: 1 / span 3;
        margin: 1px;
    }
`;
export const SInputSearch = styled(SInput)`
    grid-column: 2;
    margin: 5px;
    @media ${device.mobileM} {
        font-size: 13px;
        grid-row: 2;
        grid-column: 1 / span 3;
        margin: 1px;
    }
`;
