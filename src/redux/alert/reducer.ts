import { IAlertAction, IAlertState } from './types'

const initialState: IAlertState = {
  isVisible: false,
  type: '',
  message: ''
}

const alertReducer = (
  state = initialState,
  action: IAlertAction
): IAlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        isVisible: true,
        type: action.payload.type,
        message: action.payload.message
      }
    case 'HIDE_ALERT':
      return initialState
    default:
      return state
  }
}

export default alertReducer
