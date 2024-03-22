import styled from 'styled-components'
import Colors from '@/utils/styles/colors'

export const PokedexPageRange = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  font-size: 13px;
  font-weight: 600;

  color: ${Colors.textPrimary};

  p {
    margin-right: 4px;
  }

  span {
    padding: 6px 10px;
    border-radius: 6px;

    font-size: 14px;
    font-weight: 400;

    color: ${Colors.textTertiary};
    border: 1px solid ${Colors.borderActive};
  }
`
