import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit } from '@/utils/styles/globals'

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
  padding: 0 20px;
`

export const PokedexHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;

  font-family: 'pokefont';
  font-size: 56px;

  color: ${Colors.textSecondary};

  svg {
    font-size: 50px;
  }
`
