import { IPokemonAction, IPokemonState } from './types'

export const pokemonsInitialState: IPokemonState = {
  pokemonList: [],
  totalCount: 0,
  offset: 0,
  nextPage: null,
  previousPage: null
}

const pokemonsReducer = (
  state: IPokemonState = pokemonsInitialState,
  action: IPokemonAction
): IPokemonState => {
  switch (action.type) {
    case 'FETCH_POKEMONS_LIST':
      return {
        ...state,
        pokemonList: action.payload.pokemonList,
        totalCount: action.payload.totalCount,
        offset: action.payload.offset,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage
      }
    case 'UPDATE_OFFSET':
      return {
        ...state,
        offset: action.payload.offset
      }
    default:
      return state
  }
}

export default pokemonsReducer
