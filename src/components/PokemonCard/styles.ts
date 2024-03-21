import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: calc((100% / 3) - (20px / 3));
  padding: 15px;
  border-radius: 8px;
  overflow: hidden;

  border: 1px solid black;
`

export const PokemonCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }
`

export const PokemonCardMain = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PokemonCardTypes = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`

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

export const PokemonCardImage = styled.div`
  position: relative;
  display: flex;

  /* border: 1px solid red; */

  svg {
    z-index: 5;
    position: absolute;
    right: -50px;
    bottom: -50px;
    font-size: 150px;
    transform: rotate(-35deg);

    color: rgba(0, 0, 0, 0.05);
  }
`

export const PokemonImage = styled.img`
  z-index: 10;
  display: flex;
  height: 80px;
  margin: 0 -10px 0 0;
`
