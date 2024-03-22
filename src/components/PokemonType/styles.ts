import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

interface IPokemonType {
  minified: number
}

export const PokemonType = styled.div<IPokemonType>`
  display: flex;
  align-items: center;
  column-gap: 3px;
  width: fit-content;
  padding: ${({ minified }) => (minified ? '0px' : '1px 8px 1px 1px')};
  border-radius: 50px;

  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textPrimary};
  background-color: rgba(0, 0, 0, 0.05);
`

export const PokemonTypeIcon = styled.img`
  width: 24px;
`
