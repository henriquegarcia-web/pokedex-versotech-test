import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokedexFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 4px;
  width: 100%;
  padding: 12px 20px;

  font-size: 12px;
  font-weight: 300;

  color: ${Colors.textSecondary};
  background-color: ${Colors.pokedexRed};

  a {
    color: ${Colors.textSecondary};
    font-weight: 500;
  }
`
