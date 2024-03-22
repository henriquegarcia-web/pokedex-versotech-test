import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

interface IAlert {
  visible: number
}

export const AlertBackdrop = styled.div<IAlert>`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;
  height: 100%;

  backdrop-filter: blur(2px);
`

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: fit-content;
  height: fit-content;
  margin-top: 80px;
  padding: 15px;
  border-radius: 6px;
  overflow: hidden;

  border: 1px solid ${Colors.pokedexGray};
  background-color: ${Colors.pokedexBlack};
`

export const AlertContent = styled.p`
  font-size: 12px;
  font-weight: 500;

  color: ${Colors.textSecondary};
`

export const AlertButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    font-size: 14px;
    font-weight: 500;

    color: white;
    background-color: ${Colors.button};

    &:hover {
      background-color: ${Colors.buttonHover};
    }
  }
`
