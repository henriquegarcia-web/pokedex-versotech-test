import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokedexHeaderSearch = styled.form`
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
  background-color: ${Colors.button};

  &:hover {
    background-color: ${Colors.buttonHover};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${Colors.buttonDisabled};
  }
`
