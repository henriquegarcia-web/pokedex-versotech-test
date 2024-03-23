import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokedexLogo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  height: 42px;
  cursor: pointer;

  h1 {
    display: flex;
    align-items: center;

    font-family: 'Fugaz One', sans-serif;
    font-size: 46px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;

    svg {
      font-size: 46px;
      margin-bottom: 2px;
      transform: rotate(1deg);
    }
  }

  color: ${Colors.textSecondary};
`
