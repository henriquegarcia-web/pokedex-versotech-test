import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import {
  MdCatchingPokemon,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md'

import { PokemonCard } from '@/components'
import { pokemonsInitialState } from '@/redux/pokemons/reducer'
import api from '@/api'

const PokedexPage = () => {
  const dispatch = useDispatch()

  const { pokemonList, totalCount, offset, nextPage, previousPage } =
    useSelector((rootReducer) => rootReducer.pokemonsReducer)

  const [currentOffset, setCurrentOffset] = useState(offset)

  const fetchPokemonData = async (limit = 12, offset = 0) => {
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
        offset: currentOffset,
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

  // useEffect(() => {
  //   console.log(offset, currentOffset)
  // }, [offset, currentOffset])

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
          <S.PokedexMainListHeader>
            <div></div>
            <S.PokedexListPageCounter>
              <p>Number range:</p>
              <span>0001</span>-<span>0009</span>
            </S.PokedexListPageCounter>
          </S.PokedexMainListHeader>
          <S.PokedexMainList>
            {pokemonList?.map((pokemon: any) => (
              <PokemonCard key={pokemon.name} pokemonData={pokemon} />
            ))}
          </S.PokedexMainList>
          <S.PokedexMainListFooter>
            <div></div>
            <PokedexPagination
              currentOffset={currentOffset}
              setCurrentOffset={setCurrentOffset}
              fetchPokemonData={fetchPokemonData}
            />
          </S.PokedexMainListFooter>
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
        placeholder="Pokemon name or type or number "
      />
      <S.PokedexSearchButton>Search</S.PokedexSearchButton>
    </S.PokedexHeaderSearch>
  )
}

// ======================================== POKEDEX PAGINATION

interface IPokedexPagination {
  currentOffset: number
  setCurrentOffset: any
  fetchPokemonData: (limit: number, offset: number) => void
}

const PokedexPagination = ({
  currentOffset,
  setCurrentOffset,
  fetchPokemonData
}: IPokedexPagination) => {
  const pageIndex = Math.floor(currentOffset / 12) + 1

  const handleNextPage = () => {
    setCurrentOffset(currentOffset + 12)
    fetchPokemonData(12, currentOffset + 12)
  }

  const handlePreviousPage = () => {
    if (pageIndex === 1) return

    setCurrentOffset(currentOffset - 12)
    fetchPokemonData(12, currentOffset - 12)
  }

  return (
    <S.PokedexPagination>
      <button onClick={handlePreviousPage} disabled={pageIndex === 1}>
        <MdChevronLeft />
      </button>
      <span>{pageIndex}</span>
      <button onClick={handleNextPage}>
        <MdChevronRight />
      </button>
    </S.PokedexPagination>
  )
}
