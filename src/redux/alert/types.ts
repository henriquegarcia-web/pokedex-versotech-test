export interface CustomAlertState {
  isVisible: boolean
  type: string
  message: string
}

export enum CustomAlertActionTypes {
  SHOW_ALERT = 'SHOW_ALERT',
  HIDE_ALERT = 'HIDE_ALERT'
}

interface ShowCustomAlertAction {
  type: CustomAlertActionTypes.SHOW_ALERT
  payload: { type: string; message: string }
}

interface HideCustomAlertAction {
  type: CustomAlertActionTypes.HIDE_ALERT
}

export type CustomAlertAction = ShowCustomAlertAction | HideCustomAlertAction
