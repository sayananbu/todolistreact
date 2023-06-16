import styled from 'styled-components';
export const ToggleTheme = styled.div`
    grid-column: 2;
    grid-row: 3;
    position: relative;
    width: 200px;
	height: 100px;
	transform: scale(.4);
	justify-self: center;
	align-self: center;
    label {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #28292c;
        border-radius: 50px;
        cursor: pointer;
		border: ${({theme})=>theme === 'dark' ? '3px solid #d8dbe0' : '3px solid #000'};
    }
    input {
        position: absolute;
        display: none;
    }
    span {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: 0.3s;
    }
    input:checked ~ span {
        background-color: #fff;
    }
    span::before {
        content: '';
        position: absolute;
        top: 13px;
        left: 16px;
        width: 75px;
        height: 75px;
        border-radius: 50%;
        box-shadow: inset 28px -4px 0px 0px #d8dbe0;
        background-color: #28292c;
        transition: 0.3s;
    }
    input:checked ~ span::before {
        transform: translateX(95px);
        background-color: #28292c;
        box-shadow: none;
    }
`;
export const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
`;