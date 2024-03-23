import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import {
  Header,
  PokedexPageRange,
  PokedexPagination,
  PokemonCard
} from '@/components'

import { IRootState } from '@/redux/root-reducer'
import { pokemonsInitialState } from '@/redux/pokemons/reducer'
import api from '@/api'

import { IPokemonCardInfo } from '@/@types/pokemonInfos'

const PokedexPage = () => {
  const dispatch = useDispatch()

  const { pokemonList, totalCount, offset } = useSelector(
    (rootReducer: IRootState) => rootReducer.pokemonsReducer
  )

  const [pokemonsFetching, setPokemonsFetching] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(offset)

  const fetchPokemonList = async (limit = 12, offset = 0) => {
    try {
      setPokemonsFetching(true)

      const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
      const data = response.data

      const pokemonArray: IPokemonCardInfo[] = []
      for (const pokemon of data.results) {
        const pokemonResponse = await api.get(pokemon.url)
        const pokemonData = pokemonResponse.data

        const formattedPokemonData: IPokemonCardInfo = {
          id: pokemonData.id,
          name: pokemonData.name,
          image: pokemonData.sprites.other.home.front_default,
          types: pokemonData.types
        }

        pokemonArray.push(formattedPokemonData)
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
      console.error('Error fetching Pokémon list:', error)

      dispatch({
        type: 'FETCH_POKEMONS_LIST',
        payload: pokemonsInitialState
      })
    } finally {
      setPokemonsFetching(false)
    }
  }

  useEffect(() => {
    fetchPokemonList()
    setCurrentOffset(0)
  }, [])

  const renderPokemonSkeleton = () => {
    const pokemonCards = []
    for (let i = 0; i < 12; i++) {
      pokemonCards.push(<S.PokemonCardSkeleton key={`pokemon-cards-${i}`} />)
    }
    return pokemonCards
  }

  return (
    <S.PokedexPage>
      <Header />
      <S.PokedexMain>
        <S.PokedexMainWrapper>
          <S.PokedexMainListHeader>
            <div />
            <PokedexPageRange currentOffset={currentOffset} />
          </S.PokedexMainListHeader>
          <S.PokedexMainList>
            {pokemonsFetching
              ? renderPokemonSkeleton()
              : pokemonList?.map((pokemon: IPokemonCardInfo) => (
                  <PokemonCard key={pokemon.name} pokemonData={pokemon} />
                ))}
          </S.PokedexMainList>
          <S.PokedexMainListFooter>
            <div />
            <PokedexPagination
              currentOffset={currentOffset}
              setCurrentOffset={setCurrentOffset}
              fetchPokemonList={fetchPokemonList}
              loading={pokemonsFetching}
              totalPokemonsCount={totalCount}
            />
          </S.PokedexMainListFooter>
        </S.PokedexMainWrapper>
      </S.PokedexMain>
    </S.PokedexPage>
  )
}

export default PokedexPage
