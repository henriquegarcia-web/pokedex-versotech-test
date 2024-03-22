import styled, { keyframes } from 'styled-components'
import Colors from '@/utils/styles/colors'

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
`

export const PokedexPaginationInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;

  border: 1px solid ${Colors.borderActive};

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 6px;

    font-size: 15px;
    font-weight: 500;

    color: ${Colors.borderActive};
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  svg {
    font-size: 16px;
    animation: ${rotate} 1s linear infinite;

    color: ${Colors.borderActive};
  }
`
