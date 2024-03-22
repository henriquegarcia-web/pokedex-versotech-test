import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import { IRootState } from '@/redux/root-reducer'

const Alert = () => {
  const dispatch = useDispatch()

  const { isVisible, message } = useSelector(
    (rootReducer: IRootState) => rootReducer.alertReducer
  )

  const handleCloseAlert = () => {
    dispatch({
      type: 'HIDE_ALERT'
    })
  }

  console.log(isVisible)

  return (
    <S.AlertBackdrop visible={isVisible ? 1 : 0}>
      <S.Alert>
        <S.AlertContent>{message}</S.AlertContent>
        <S.AlertButton>
          <button onClick={handleCloseAlert}>Close</button>
        </S.AlertButton>
      </S.Alert>
    </S.AlertBackdrop>
  )
}

export default Alert
