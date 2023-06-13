import styled from 'styled-components';
import { device } from '../../../styles/app.styles';
import { SInput } from '../../../UI/input.ui';

export const SAddTodoForm = styled.form`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: space-evenly;
    grid-row: 1;
`;
export const SInputAdd = styled(SInput)`
    grid-column: 1;
`;
export const SButton = styled.button`
    border-radius: 15px;
    grid-column: 2;
    font-size: 18px;
    margin: 5px;
    border: none;
    cursor: pointer;
	@media ${device.mobileL} {
		margin: 5px 0;
		padding: 0;
    }
    @media ${device.mobileM} {
		margin: 5px 0;
		padding: 0;
    }
`;
