import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import {
  MdCatchingPokemon,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { PokemonCard } from '@/components'
import { pokemonsInitialState } from '@/redux/pokemons/reducer'
import api from '@/api'

const PokedexPage = () => {
  const dispatch = useDispatch()

  const { pokemonList, totalCount, offset, nextPage, previousPage } =
    useSelector((rootReducer) => rootReducer.pokemonsReducer)

  const [pokemonsFetching, setPokemonsFetching] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(offset)

  const fetchPokemonData = async (limit = 12, offset = 0) => {
    try {
      setPokemonsFetching(true)

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
    } finally {
      setPokemonsFetching(false)
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
            <PokedexPageRange currentOffset={currentOffset} />
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
              loading={pokemonsFetching}
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

// ======================================== POKEDEX PAGE RANGE

interface IPokedexPageRange {
  currentOffset: number
}

const PokedexPageRange = ({ currentOffset }: IPokedexPageRange) => {
  const pageIndex = Math.floor(currentOffset / 12) + 1

  const rangeMin = ((pageIndex - 1) * 12 + 1).toString().padStart(4, '0')
  const rangeMax = (pageIndex * 12).toString().padStart(4, '0')

  return (
    <S.PokedexPageRange>
      <p>Page range:</p>
      <span>{rangeMin}</span>-<span>{rangeMax}</span>
    </S.PokedexPageRange>
  )
}

// ======================================== POKEDEX PAGINATION

interface IPokedexPagination {
  currentOffset: number
  setCurrentOffset: any
  fetchPokemonData: (limit: number, offset: number) => void
  loading: boolean
}

const PokedexPagination = ({
  currentOffset,
  setCurrentOffset,
  fetchPokemonData,
  loading
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
      <button
        onClick={handlePreviousPage}
        disabled={pageIndex === 1 || loading}
      >
        <MdChevronLeft />
      </button>
      <span>{loading ? <AiOutlineLoading3Quarters /> : <>{pageIndex}</>}</span>
      <button onClick={handleNextPage} disabled={loading}>
        <MdChevronRight />
      </button>
    </S.PokedexPagination>
  )
}
