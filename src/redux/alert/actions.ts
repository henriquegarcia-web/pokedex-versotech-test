import { Dispatch } from 'redux'
import { EnumAlertActionTypes, IAlertAction } from './types'

export const hideAlert = () => (dispatch: Dispatch<IAlertAction>) => {
  dispatch({
    type: EnumAlertActionTypes.HIDE_ALERT
  })
}
