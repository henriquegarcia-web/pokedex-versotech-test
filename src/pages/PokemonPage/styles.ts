import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit } from '@/utils/styles/globals'

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
    opacity: 0.5;

    svg {
      font-size: 22px;

      color: ${Colors.pokedexBlack};
    }

    &:hover {
      opacity: 0.8;
    }

    background-color: transparent;
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

export const PokemonInfoWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`

export const PokemonInfoPrimary = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 45%;

  border: 1px solid red;
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

export const PokemonInfoDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  width: 100%;
`

export const PokemonInfoDetail = styled.div`
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
  width: 55%;

  border: 1px solid red;
`

export const PokemonInfoMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`

export const PokemonInfoName = styled.h1`
  display: flex;

  font-size: 36px;
  font-weight: 900;
  text-transform: capitalize;

  color: ${Colors.pokedexRed};
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

export const PokemonInfoEvolution = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  transition: 0.3s;

  img {
    width: 100px;
  }

  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};
  }
`

export const PokemonInfoEvolutionName = styled.h4`
  display: flex;
`

export const PokemonInfoEvolutionType = styled.div`
  display: flex;
`
