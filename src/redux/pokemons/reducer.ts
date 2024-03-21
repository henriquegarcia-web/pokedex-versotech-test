export interface Pokemon {
  id: number
  name: string
  // outras propriedades dos Pokémon, se houver
}

export interface PokemonState {
  pokemonList: Pokemon[]
  totalCount: number
  nextPage: string | null
  previousPage: string | null
}

export const pokemonsInitialState: PokemonState = {
  pokemonList: [],
  totalCount: 0,
  nextPage: null,
  previousPage: null
}

interface FetchPokemonSuccessAction {
  type: 'FETCH_POKEMONS_LIST'
  payload: {
    pokemonList: Pokemon[]
    totalCount: number
    nextPage: string | null
    previousPage: string | null
  }
}

type PokemonAction = FetchPokemonSuccessAction

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
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage
      }
    default:
      return state
  }
}

export default pokemonsReducer
