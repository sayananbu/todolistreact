import styled from 'styled-components';
import { device } from '../../../styles/app.styles';
import { SInput } from '../../../UI/input.ui';
import { STodoButton } from '../../../UI/todobutton.ui';

export const STodoContainer = styled.div`
    display: grid;
    grid-template-columns: 8% 60% 16% 16%;
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 15px auto 0 auto;
    box-sizing: border-box;
	@media ${device.mobileL}{
		height: 80px;
		grid-template-columns: repeat(5,20%);
		grid-template-rows: 60% 40%;
	}
	@media ${device.mobileM}{
		height: 80px;
		grid-template-columns: repeat(5,20%);
		grid-template-rows: 60% 40%;
	}
`;
export const SCheckbox = styled.input`
    transform: scale(3);
    grid-column: 1;
	@media ${device.mobileL}{
		grid-row:span 2;
		transform: scale(3);
	}
	@media ${device.mobileM}{
		grid-row:span 2;
		transform: scale(3);
	}
`;
export const STodoLabel = styled.label`
    margin: 0;
    padding: 0;
    grid-column: 2;
    font-size: 23px;
    color: #fff;
    width: 95%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
	@media ${device.mobileL}{
		font-size: 17px;
		grid-row:1;
		grid-column:2/span 4
	}
	@media ${device.mobileM}{
		font-size: 17px;
		grid-row:1;
		grid-column:2/span 4
	}
`;

export const STodoEditButton = styled(STodoButton)`
    grid-column: 3;
    background-color: #3b9926;
	@media ${device.mobileL}{
		grid-row: 2;
		grid-column:2/span 2;
	}
	@media ${device.mobileM}{
		grid-row: 2;
		grid-column:2/span 2;
	}
`;
export const STodoDeleteButton = styled(STodoButton)`
    background-color: #b32f1e;
    grid-column: 4;
	@media ${device.mobileL}{
		grid-row: 2;
		grid-column: 4/span 2;
	}
	@media ${device.mobileM}{
		grid-row: 2;
		grid-column: 4/span 2;
	}
`;

export const SEditInput = styled(SInput)`
    //width: 400px;
    width: 95%;
    margin: 0;
    padding: 0;
    height: 70%;
    grid-column: span 2;
	@media ${device.mobileL}{
		grid-row: 1;
		grid-column: 2/span 4;
		font-size:13px;
	}
	@media ${device.mobileM}{
		grid-row: 1;
		grid-column: 2/span 4;
		font-size:13px;
	}
`;
