import { combineReducers } from 'redux'

import pokemonsReducer from './pokemons/reducer'
import alertReducer from './alert/reducer'

const rootReducer = combineReducers({ pokemonsReducer, alertReducer })

export default rootReducer
