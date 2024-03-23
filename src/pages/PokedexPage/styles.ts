import styled, { keyframes } from 'styled-components'
import {
  pageWrapperLimit,
  responsiveDesktop,
  responsiveMobile,
  responsiveTablet
} from '@/utils/styles/globals'

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

export const PokedexPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

export const PokedexMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0;
`

export const PokedexMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: ${pageWrapperLimit};
  padding: 0 20px;
`

// --------------------- POKEMON LIST HEADER

export const PokedexMainListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`

// --------------------- POKEMON LIST MAIN

export const PokedexMainList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`

// --------------------- POKEMON LIST FOOTER

export const PokedexMainListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`

// --------------------- INFOS SKELETON

export const PokemonCardSkeleton = styled.div`
  display: flex;
  width: calc((100% / 4) - (30px / 4));
  min-height: 130px;
  border-radius: 8px;

  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;

  @media screen and (max-width: ${responsiveDesktop}) {
    width: calc((100% / 3) - (20px / 3));
  }

  @media screen and (max-width: ${responsiveTablet}) {
    width: calc((100% / 2) - (10px / 2));
  }

  @media screen and (max-width: ${responsiveMobile}) {
    width: 100%;
  }
`
