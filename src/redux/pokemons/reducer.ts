export interface Pokemon {
  id: number
  name: string
  // outras propriedades dos Pokémon, se houver
}

export interface PokemonState {
  pokemonList: Pokemon[]
  totalCount: number
  offset: number
  nextPage: string | null
  previousPage: string | null
}

export const pokemonsInitialState: PokemonState = {
  pokemonList: [],
  totalCount: 0,
  offset: 0,
  nextPage: null,
  previousPage: null
}

interface FetchPokemonSuccessAction {
  type: 'FETCH_POKEMONS_LIST' | 'UPDATE_OFFSET'
  payload: {
    pokemonList: Pokemon[]
    totalCount: number
    offset: number
    nextPage: string | null
    previousPage: string | null
  }
}

interface UpdateOffsetAction {
  type: 'UPDATE_OFFSET'
  payload: {
    offset: number
  }
}

type PokemonAction = FetchPokemonSuccessAction | UpdateOffsetAction

const pokemonsReducer = (
  state: PokemonState = pokemonsInitialState,
  action: PokemonAction
): PokemonState => {
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
