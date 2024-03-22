import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons/reducer'
import alertReducer from './alert/reducer'
import { IAlertState } from './alert/types'
import { IPokemonState } from './pokemons/types'

export interface IRootState {
  pokemonsReducer: IPokemonState
  alertReducer: IAlertState
}

const rootReducer = combineReducers({ pokemonsReducer, alertReducer })

export default rootReducer
