import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { Button, responsiveMobile } from '@/utils/styles/globals'

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

export const PokedexSearchButton = styled(Button)`
  width: 100px;

  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: ${responsiveMobile}) {
    width: 70px;
  }
`
