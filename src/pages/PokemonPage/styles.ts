import styled, { keyframes } from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit } from '@/utils/styles/globals'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

export const PokemonInfoLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  svg {
    font-size: 40px;

    animation: ${rotate} 1s linear infinite;
    color: ${Colors.borderActive};
  }
`

export const PokemonInfoWrapper = styled.div`
  display: flex;
  column-gap: 30px;
`

export const PokemonInfoPrimary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;

  border: 2px solid ${Colors.pokedexGray};
`

export const PokemonInfoPrimaryHeader = styled.h1`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;

  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textSecondary};
  background-color: ${Colors.pokedexGray};
`

export const PokemonInfoPrimaryWrapper = styled.div`
  display: flex;
  padding: 0 15px 15px 15px;
  flex-direction: column;
  row-gap: 25px;
`

export const PokemonInfoImage = styled.div`
  display: flex;

  img {
    width: 100%;
  }
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

export const PokemonInfoSecondary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  overflow: hidden;

  border: 2px solid ${Colors.pokedexGray};
`

export const PokemonInfoSecondaryHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;

  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textSecondary};
  background-color: ${Colors.pokedexGray};
`

export const PokemonInfoSecondaryWrapper = styled.div`
  display: flex;
  padding: 0 15px 15px 15px;
  flex-direction: column;
  row-gap: 25px;
`

export const PokemonInfoDescription = styled.p`
  display: flex;

  font-size: 16px;
  font-weight: 300;

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

// =============================== POKEMON MAIN INFOS

export const PokemonMainInfos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
`

export const PokemonMainInfoWrapper = styled.div`
  display: flex;
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

    color: ${Colors.textTertiary};
  }

  color: ${Colors.textPrimary};
  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};
  }
`

// =============================== POKEMON EVOLUTION CARD

export const PokemonEvolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: calc((100% / 3) - (30px / 3));
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};
  }
`
export const PokemonEvolutionCardImage = styled.img`
  width: 70px;
`

export const PokemonEvolutionCardName = styled.h4`
  display: flex;

  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textPrimary};
`

export const PokemonEvolutionCardType = styled.div`
  display: flex;
`
