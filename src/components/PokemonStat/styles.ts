import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

interface IPokemonStatFill {
  width: number
}

export const PokemonStat = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 6px 8px;
  border-radius: 8px;
  transition: 0.3s;

  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};
  }
`

export const PokemonStatLabel = styled.div`
  display: flex;
  width: 100px;

  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textPrimary};
`

export const PokemonStatBar = styled.div`
  display: flex;
  flex: 1;
  height: 6px;
  border-radius: 50px;
  overflow: hidden;

  background-color: ${Colors.statBar};
`

export const PokemonStatFill = styled.div<IPokemonStatFill>`
  display: flex;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  border-radius: 50px;

  background-color: ${Colors.statBarFill};
`
