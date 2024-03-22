import styled, { keyframes } from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit } from '@/utils/styles/globals'

export const PokedexPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  /* background-color: rgba(39, 39, 39, 255); */
  /* background-image: url(data:image/png;base64,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); */
`

export const PokedexHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;

  background-color: ${Colors.pokedexRed};
`

export const PokedexHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  max-width: ${pageWrapperLimit};
`

export const PokedexHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  font-family: 'pokefont';
  font-size: 56px;

  color: ${Colors.textSecondary};

  svg {
    font-size: 50px;
  }
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
`

// --------------------- POKEMON LIST HEADER

export const PokedexMainListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`

export const PokedexPageRange = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  font-size: 13px;
  font-weight: 600;

  color: ${Colors.textPrimary};

  p {
    margin-right: 4px;
  }

  span {
    padding: 6px 10px;
    border-radius: 6px;

    font-size: 14px;
    font-weight: 400;

    color: ${Colors.textTertiary};
    border: 1px solid ${Colors.borderActive};
  }
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const PokedexPagination = styled.div`
  display: flex;
  column-gap: 4px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    border: 1px solid ${Colors.pokedexBlue};
    background-color: ${Colors.pokedexBlue};

    svg {
      font-size: 22px;

      color: ${Colors.textSecondary};
    }

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      pointer-events: none;

      border: 1px solid ${Colors.borderHover};
      background-color: ${Colors.borderHover};
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    border-radius: 6px;

    font-size: 15px;
    font-weight: 500;

    color: ${Colors.borderActive};
    border: 1px solid ${Colors.borderActive};

    svg {
      font-size: 18px;
      animation: ${rotate} 1s linear infinite;
    }
  }
`

// ======================================== POKEDEX SEARCH INPUT

export const PokedexHeaderSearch = styled.div`
  display: flex;
  width: 100%;
  column-gap: 10px;
`

export const PokedexSearchInput = styled.input`
  display: flex;
  flex: 1;
  height: 45px;
  padding: 0 15px;
  border-radius: 6px;

  font-size: 15px;
  font-weight: 400;

  color: ${Colors.pokedexWhite};
  background-color: ${Colors.pokedexBlack};
`

export const PokedexSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  font-size: 14px;
  font-weight: 500;

  color: white;
  background-color: ${Colors.pokedexBlue};

  &:hover {
    background-color: ${Colors.pokedexBlue};
  }
`
