import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { pageWrapperLimit } from '@/utils/styles/globals'

export const PokedexHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 0;

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
