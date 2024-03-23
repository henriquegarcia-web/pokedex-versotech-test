import styled, { keyframes } from 'styled-components'
import Colors from '@/utils/styles/colors'
import {
  Button,
  pageWrapperLimit,
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

export const PokemonPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

export const PokemonMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0;
`

export const PokemonMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: ${pageWrapperLimit};
  padding: 0 20px;
`

// --------------------- INFOS HEADER

export const PokemonInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0.7;

    svg {
      font-size: 22px;

      color: ${Colors.pokedexBlack};
    }

    &:hover {
      opacity: 0.9;
    }

    background-color: transparent;

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }

  span {
    font-size: 13px;
    font-weight: 300;

    b {
      font-weight: 600;
    }

    color: ${Colors.textTertiary};
  }
`

// --------------------- INFOS WRAPPER

export const PokemonInfoError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  width: 100%;
  height: fit-content;
  padding: 20px;

  img {
    width: 140px;
  }

  p {
    font-size: 20px;

    color: ${Colors.textTertiary};
  }
`

export const PokemonInfoErrorButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
`

export const PokemonInfoWrapper = styled.div`
  display: flex;
  column-gap: 30px;

  @media screen and (max-width: ${responsiveTablet}) {
    flex-direction: column;
    row-gap: 30px;
  }
`

export const PokemonInfoContainerHeader = styled.h2`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;

  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textSecondary};
  background-color: ${Colors.pokedexGray};
`

// --------------------- INFOS PRIMARY

export const PokemonInfoPrimary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;

  border: 2px solid ${Colors.pokedexGray};

  @media screen and (max-width: ${responsiveTablet}) {
    width: 100%;
  }
`

export const PokemonInfoPrimaryHeader = styled(PokemonInfoContainerHeader)`
  font-size: 22px;
`

export const PokemonInfoPrimaryWrapper = styled.div`
  display: flex;
  padding: 0 15px 15px 15px;
  flex-direction: column;
  row-gap: 25px;
`

export const PokemonInfoImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100%;

  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: ${responsiveTablet}) {
    img {
      width: 70%;
    }
  }
`

export const PokemonInfoDescription = styled.p`
  display: flex;

  font-size: 16px;
  font-weight: 300;
  line-height: 22px;

  color: ${Colors.textPrimary};
`

export const PokemonInfoEvolutions = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokemonInfoEvolutionsWrapper = styled.div`
  display: flex;
  gap: 15px;
`

// --------------------- INFOS SECONDARY

export const PokemonInfoSecondary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;

  border: 2px solid ${Colors.pokedexGray};

  @media screen and (max-width: ${responsiveTablet}) {
    width: 100%;
  }
`

export const PokemonInfoSecondaryHeader = styled(PokemonInfoContainerHeader)`
  font-size: 18px;
`

export const PokemonInfoSecondaryWrapper = styled.div`
  display: flex;
  padding: 0 15px 15px 15px;
  flex-direction: column;
  row-gap: 25px;
`

export const PokemonInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokemonInfoTitle = styled.h3`
  margin-bottom: 15px;

  font-size: 16px;
  font-weight: 800;
  text-transform: capitalize;

  color: ${Colors.textPrimary};
`

export const PokemonInfoType = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokemonInfoTypeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const PokemonInfoStatus = styled.div`
  display: flex;
  flex-direction: column;
`

export const PokemonInfoStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`

// =============================== POKEMON MAIN INFOS

export const PokemonMainInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`

export const PokemonMainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  width: calc(50% - (10px / 2));
  padding: 6px 8px;
  border-radius: 8px;
  transition: 0.3s;

  font-size: 13px;

  b {
    font-weight: 600;
  }

  p {
    font-weight: 400;
    text-transform: capitalize;

    color: ${Colors.textTertiary};
  }

  color: ${Colors.textPrimary};
  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};
  }
`

// --------------------- INFOS SKELETON

export const Skeleton = styled.div`
  border-radius: 8px;

  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`

export const PageIndicatorSkeleton = styled(Skeleton)`
  width: 70px;
  height: 20px;
  border-radius: 4px;
`

export const PokemonHeaderSkeleton = styled(Skeleton)`
  height: 50px;
`

export const PokemonImageSkeleton = styled(Skeleton)`
  width: 100%;
  padding-top: 100%;
`

export const PokemonDescriptionSkeleton = styled(Skeleton)`
  width: 100%;
  height: 60px;
`

export const PokemonEvolutionSkeleton = styled(Skeleton)`
  width: calc((100% / 3) - (30px / 3));
  height: 150px;
`

export const PokemonMainInfosSkeleton = styled(Skeleton)`
  width: calc(50% - (10px / 2));
  height: 30px;
`

export const PokemonTypeSkeleton = styled(Skeleton)`
  width: 100%;
  height: 30px;
`

export const PokemonInfosSkeleton = styled(Skeleton)`
  width: 100%;
  height: 30px;
`
