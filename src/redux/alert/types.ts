export interface IAlertState {
  isVisible: boolean
  type: string
  message: string
}

export enum EnumAlertActionTypes {
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT'
}

interface IShowAlertAction {
  type: EnumAlertActionTypes.SHOW_ALERT
  payload: IAlertState
}

interface IHideAlertAction {
  type: EnumAlertActionTypes.HIDE_ALERT
}

export type IAlertAction = IShowAlertAction | IHideAlertAction
