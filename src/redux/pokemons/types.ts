export interface IPokemon {
  id: number
  name: string
}

export interface IPokemonState {
  pokemonList: IPokemon[]
  totalCount: number
  offset: number
  nextPage: string | null
  previousPage: string | null
}

export interface IFetchPokemonSuccessAction {
  type: 'FETCH_POKEMONS_LIST' | 'UPDATE_OFFSET'
  payload: {
    pokemonList: IPokemon[]
    totalCount: number
    offset: number
    nextPage: string | null
    previousPage: string | null
  }
}

export interface IUpdateOffsetAction {
  type: 'UPDATE_OFFSET'
  payload: {
    offset: number
  }
}

export type IPokemonAction = IFetchPokemonSuccessAction | IUpdateOffsetAction
