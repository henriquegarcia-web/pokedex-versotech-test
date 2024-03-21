import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { PokemonCard } from '@/components'
import { pokemonsInitialState } from '@/redux/pokemons/reducer'
import api from '@/api'

const PokedexPage = () => {
  const dispatch = useDispatch()

  const { pokemonList, totalCount, nextPage, previousPage } = useSelector(
    (rootReducer) => rootReducer.pokemonsReducer
  )

  const fetchPokemonData = async (limit = 10, offset = 0) => {
    try {
      const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
      const data = response.data

      const pokemonArray = []
      for (const pokemon of data.results) {
        const pokemonResponse = await api.get(pokemon.url)
        const pokemonData = pokemonResponse.data
        pokemonArray.push(pokemonData)
      }

      const pokemonData = {
        pokemonList: pokemonArray,
        totalCount: data.count,
        nextPage: data.next,
        previousPage: data.previous
      }

      dispatch({
        type: 'FETCH_POKEMONS_LIST',
        payload: pokemonData
      })
    } catch (error) {
      console.error('Error fetching Pokémon data:', error)

      dispatch({
        type: 'FETCH_POKEMONS_LIST',
        payload: pokemonsInitialState
      })
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [])

  useEffect(() => {
    console.log(pokemonList)
  }, [pokemonList])

  return (
    <S.PokedexPage>
      <S.PokedexHeader>
        <S.PokedexHeaderWrapper>
          <S.PokedexHeaderTitle>
            <MdCatchingPokemon />
            PokéDex
          </S.PokedexHeaderTitle>
          <PokedexSearch />
        </S.PokedexHeaderWrapper>
      </S.PokedexHeader>
      <S.PokedexMain>
        <S.PokedexMainWrapper>
          <S.PokedexMainFilters></S.PokedexMainFilters>
          <S.PokedexMainList>
            <PokemonCard />
          </S.PokedexMainList>
        </S.PokedexMainWrapper>
      </S.PokedexMain>
    </S.PokedexPage>
  )
}

export default PokedexPage

// ======================================== POKEDEX SEARCH INPUT

interface IPokedexSearch {}

const PokedexSearch = ({}: IPokedexSearch) => {
  return (
    <S.PokedexHeaderSearch>
      <S.PokedexSearchInput
        type="text"
        placeholder="Procure por nome, etc ..."
      />
      <S.PokedexSearchButton>Pesquisar</S.PokedexSearchButton>
    </S.PokedexHeaderSearch>
  )
}
