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
  export const device = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(max-width: ${size.desktop})`,
	desktopL: `(max-width: ${size.desktop})`
  };
export const SApp = styled.div`
	display: flex;
	justify-content: center;
	align-items:center;
	box-sizing: border-box;
    flex-direction: column;
	position: relative;
    background-color: ${({theme})=>theme === 'dark' ? '#282c34': '#fff'};
    flex-basis: 100vw;
    height: 100vh;
	overflow: hidden;
`;
