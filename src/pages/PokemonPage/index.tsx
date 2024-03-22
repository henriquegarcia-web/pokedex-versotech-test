import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'
import { HiArrowLeft } from 'react-icons/hi'

import { Header } from '@/components'
import { pokemonData } from '@/data/mockPokemon'
import api from '@/api'

import { Evolution } from '@/@types/pokemonInfos'

interface FormattedEvolution {
  speciesName: string
  minLevel: number | null
  triggerName: string | null
}

const PokemonPage = () => {
  const params = useParams()
  const { pokemonId } = params

  const [pokemonFetching, setPokemonFetching] = useState(false)

  const formatEvolution = (evolution: Evolution): FormattedEvolution => {
    const evolutionDetails = evolution.evolution_details
      ? evolution.evolution_details[0]
      : null
    return {
      speciesName: evolution.species?.name,
      minLevel: evolutionDetails?.min_level || null,
      triggerName: evolutionDetails?.trigger?.name || null
    }
  }

  const traverseEvolutionChain = (
    chain: Evolution[] | Evolution,
    formattedEvolutions: FormattedEvolution[]
  ): void => {
    if (Array.isArray(chain)) {
      chain.forEach((evolution) => {
        formattedEvolutions.push(formatEvolution(evolution))
        if (evolution.evolves_to?.length > 0) {
          traverseEvolutionChain(evolution.evolves_to, formattedEvolutions)
        }
      })
    } else {
      formattedEvolutions.push(formatEvolution(chain))
      if (chain.evolves_to?.length > 0) {
        traverseEvolutionChain(chain.evolves_to, formattedEvolutions)
      }
    }
  }

  const formatEvolutions = (
    evolutionChain: Evolution[] | Evolution
  ): FormattedEvolution[] => {
    const formattedEvolutions: FormattedEvolution[] = []
    traverseEvolutionChain(evolutionChain, formattedEvolutions)
    return formattedEvolutions
  }

  const fetchPokemonInfos = async () => {
    try {
      setPokemonFetching(true)

      const response = await api.get(`pokemon/${pokemonId}`)
      const data = response.data

      const speciesResponse = await api.get(data.species.url)
      const speciesData = speciesResponse.data

      const evolutionChainResponse = await api.get(
        speciesData.evolution_chain.url
      )
      const evolutionChainData = formatEvolutions(
        evolutionChainResponse.data.chain
      )

      const pokemonInfo = {
        image: data.sprites.other.home.front_default,
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        stats: data.stats,
        details: {
          color: speciesData.color.name,
          category: speciesData.genera[7].genus,
          generation: speciesData.generation.name,
          shape: speciesData.shape.name,
          evolutions: evolutionChainData,
          is_legendary: speciesData.is_legendary,
          is_mythical: speciesData.is_mythical
        }
      }

      console.log(pokemonInfo)
    } catch (error) {
      console.error('Error fetching Pokémon infos:', error)
    } finally {
      setPokemonFetching(false)
    }
  }

  useEffect(() => {
    fetchPokemonInfos()
  }, [])

  return (
    <S.PokemonPage>
      <Header />
      <S.PokemonMain>
        <S.PokemonMainWrapper>
          <S.PokemonInfoHeader>
            <button>
              <HiArrowLeft />
            </button>
            <span>
              {pokemonData.id.toString().padStart(4, '0')} / <b>1300</b>
            </span>
            <div></div>
          </S.PokemonInfoHeader>
          <S.PokemonInfoWrapper>
            <S.PokemonInfoPrimary>
              <S.PokemonInfoImage>
                <img
                  src={pokemonData.sprites.other.home.front_default}
                  alt=""
                />
              </S.PokemonInfoImage>
              <S.PokemonInfoDetailsWrapper>
                <S.PokemonInfoDetail>
                  <b></b>
                  <p></p>
                </S.PokemonInfoDetail>
              </S.PokemonInfoDetailsWrapper>
              <S.PokemonInfoType></S.PokemonInfoType>
              <S.PokemonInfoWeaknesses></S.PokemonInfoWeaknesses>
              <S.PokemonInfoStatus></S.PokemonInfoStatus>
            </S.PokemonInfoPrimary>
            <S.PokemonInfoSecondary></S.PokemonInfoSecondary>
          </S.PokemonInfoWrapper>
        </S.PokemonMainWrapper>
      </S.PokemonMain>
    </S.PokemonPage>
  )
}

export default PokemonPage
