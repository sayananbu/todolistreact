import styled from 'styled-components';
const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
  }
export const SApp = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	box-sizing: border-box;
    flex-direction: column;
	position: relative;
    background-color: #282c34;
    flex-basis: 100vw;
    height: 100vh;
`;
export const SContainer = styled.div`
    display: flex;
	position: relative;
	box-sizing: border-box;
    flex-direction: column;
	background-color: rgba(255,255,255,.2);
	min-width: 800px;
	margin:20px auto;
  	min-height: 93%;
`;