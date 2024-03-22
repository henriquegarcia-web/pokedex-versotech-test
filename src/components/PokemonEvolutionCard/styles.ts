import styled from 'styled-components'
import Colors from '@/utils/styles/colors'
import { responsiveMobile } from '@/utils/styles/globals'

export const PokemonEvolutionCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: calc((100% / 3) - (30px / 3));
  padding: 90px 10px 10px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};

    .pokemon-image {
      height: 76px;
    }
  }
`
export const PokemonEvolutionCardImage = styled.img`
  position: absolute;
  top: 5px;
  height: 70px;
  transition: 0.3s;
`

export const PokemonEvolutionCardName = styled.h4`
  display: flex;

  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;

  color: ${Colors.textPrimary};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 16px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media screen and (max-width: ${responsiveMobile}) {
    font-size: 12px;
  }
`

export const PokemonEvolutionCardType = styled.div`
  display: flex;
`
