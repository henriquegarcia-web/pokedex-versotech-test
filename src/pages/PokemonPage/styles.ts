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
  width: 45%;

  border: 1px solid red;
`

export const PokemonInfoImage = styled.div`
  display: flex;

  img {
    width: 100%;
  }
`

export const PokemonInfoDetailsWrapper = styled.div`
  display: flex;
`

export const PokemonInfoDetail = styled.div`
  display: flex;
`

export const PokemonInfoType = styled.div`
  display: flex;
`

export const PokemonInfoWeaknesses = styled.div`
  display: flex;
`

export const PokemonInfoStatus = styled.div`
  display: flex;
`

export const PokemonInfoSecondary = styled.div`
  display: flex;
  width: 55%;

  border: 1px solid red;
`

// export const PokemonMain = styled.div`
//   display: flex;
// `

// export const PokemonMain = styled.div`
//   display: flex;
// `
