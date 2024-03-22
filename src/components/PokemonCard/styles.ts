import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc((100% / 4) - (30px / 4));
  min-height: 130px;
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  border: 1px solid ${Colors.borderDefault};

  &:hover {
    border: 1px solid ${Colors.borderHover};

    .pokemon-image {
      height: 88px;
      /* margin: 0 -10px 0 0; */
    }

    svg {
      font-size: 130px;
    }
  }
`

export const PokemonCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    font-size: 15px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.5px;

    color: ${Colors.textPrimary};
  }

  p {
    font-size: 13px;
    font-weight: 300;

    color: ${Colors.textTertiary};
  }
`

export const PokemonCardMain = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`

export const PokemonCardTypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 4px;
`

export const PokemonCardImage = styled.div`
  position: relative;
  display: flex;

  svg {
    z-index: 5;
    position: absolute;
    right: -50px;
    bottom: -55px;
    font-size: 140px;
    transform: rotate(-35deg);
    transition: 0.3s;

    color: rgba(0, 0, 0, 0.05);
  }
`

export const PokemonImage = styled.img`
  z-index: 10;
  z-index: 5;
  position: absolute;
  right: -5px;
  bottom: -5px;
  display: flex;
  height: 80px;
  transition: 0.3s;
`
