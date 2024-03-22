import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit, rotate } from '@/utils/styles/globals'

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

    border: 1px solid ${Colors.button};
    background-color: ${Colors.button};

    svg {
      font-size: 22px;

      color: ${Colors.textSecondary};
    }

    &:hover {
      border: 1px solid ${Colors.buttonHover};
      background-color: ${Colors.buttonHover};
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
