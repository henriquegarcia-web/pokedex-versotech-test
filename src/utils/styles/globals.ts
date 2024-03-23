import styled, { createGlobalStyle } from 'styled-components'
import Colors from './colors'

// import Colors from './colors'
// import Fonts from "../styles/fonts";

export const responsiveDesktop = '900px'
export const responsiveTablet = '760px'
export const responsiveMobile = '480px'

export const pageWrapperLimit = '900px'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'pokefont';
    src: url('/fonts/airstrike.woff2') format('woff2');
  }

  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: 'Rubik', sans-serif; */
    text-decoration: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent !important;
  
    &::-webkit-scrollbar {
      width: 6px;
      z-index: 1000;
    }

    &::-webkit-scrollbar-track {
      background: ${Colors.scrollbarTrack};
    }

    &::-webkit-scrollbar-thumb {
      background: ${Colors.scrollbarThumb};
    }
  }

  scroll-behavior: smooth;
`

export default GlobalStyle

export const Window = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
`

export const View = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
  padding: 8px 14px;

  color: white;
  background-color: ${Colors.button};

  &:hover {
    background-color: ${Colors.buttonHover};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${Colors.buttonDisabled};
  }
`
