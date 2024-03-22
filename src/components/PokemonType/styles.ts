import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokemonType = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  padding: 2px 8px 2px 2px;
  border-radius: 50px;

  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textPrimary};
  background-color: rgba(0, 0, 0, 0.05);
`

export const PokemonTypeIcon = styled.img`
  width: 24px;
`