import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'
import { HiArrowLeft } from 'react-icons/hi'

import { Header, PokemonStat, PokemonType } from '@/components'
import api from '@/api'

import {
  IEvolution,
  IFormattedEvolution,
  IPokemonInfo,
  IPokemonType,
  IStatType
} from '@/@types/pokemonInfos'

const PokemonPage = () => {
  const params = useParams()
  const { pokemonId } = params

  const [pokemonFetching, setPokemonFetching] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo | null>(null)

  const formatEvolution = async (
    evolution: IEvolution
  ): Promise<IFormattedEvolution> => {
    const response = await api.get(`pokemon/${evolution.species?.name}`)
    const data = response.data

    return {
      name: evolution.species?.name,
      image: data.sprites.other.home.front_default,
      types: data.types
    }
  }

  const traverseEvolutionChain = async (
    chain: IEvolution[] | IEvolution,
    formattedEvolutions: IFormattedEvolution[]
  ): Promise<void> => {
    if (Array.isArray(chain)) {
      chain.forEach(async (evolution) => {
        formattedEvolutions.push(await formatEvolution(evolution))
        if (evolution.evolves_to?.length > 0) {
          traverseEvolutionChain(evolution.evolves_to, formattedEvolutions)
        }
      })
    } else {
      formattedEvolutions.push(await formatEvolution(chain))
      if (chain.evolves_to?.length > 0) {
        traverseEvolutionChain(chain.evolves_to, formattedEvolutions)
      }
    }
  }

  const formatEvolutions = async (
    evolutionChain: IEvolution[] | IEvolution
  ): Promise<IFormattedEvolution[]> => {
    const formattedEvolutions: IFormattedEvolution[] = []
    await traverseEvolutionChain(evolutionChain, formattedEvolutions)
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
      const evolutionChainData: IFormattedEvolution[] = await formatEvolutions(
        evolutionChainResponse.data.chain
      )

      const pokemonInfo: IPokemonInfo = {
        image: data.sprites.other.home.front_default,
        id: data.id.toString().padStart(4, '0'),
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        stats: data.stats,
        description: speciesData.flavor_text_entries[4].flavor_text,
        color: speciesData.color.name,
        category: speciesData.genera[7].genus.replace(' Pokémon', ''),
        generation: speciesData.generation.name.replace('generation-', ''),
        shape: speciesData.shape.name,
        evolutions: evolutionChainData,
        is_legendary: speciesData.is_legendary,
        is_mythical: speciesData.is_mythical
      }

      console.log(evolutionChainData)
      setPokemonInfo(pokemonInfo)
    } catch (error) {
      console.error('Error fetching Pokémon infos:', error)
      setPokemonInfo(null)
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
              {pokemonInfo?.id} / <b>1300</b>
            </span>
            <div></div>
          </S.PokemonInfoHeader>
          <S.PokemonInfoWrapper>
            <S.PokemonInfoPrimary>
              <S.PokemonInfoImage>
                <img src={pokemonInfo?.image} alt="" />
              </S.PokemonInfoImage>
              <S.PokemonInfoDetails>
                <S.PokemonInfoTitle>Main Infos</S.PokemonInfoTitle>
                <S.PokemonInfoDetailsWrapper>
                  <S.PokemonInfoDetail>
                    <b>Category:</b>
                    <p>{pokemonInfo?.category}</p>
                  </S.PokemonInfoDetail>
                  <S.PokemonInfoDetail>
                    <b>Generation:</b>
                    <p>{pokemonInfo?.generation}</p>
                  </S.PokemonInfoDetail>
                  <S.PokemonInfoDetail>
                    <b>Height:</b>
                    <p>{pokemonInfo?.height}</p>
                  </S.PokemonInfoDetail>
                  <S.PokemonInfoDetail>
                    <b>Weight:</b>
                    <p>{pokemonInfo?.weight}</p>
                  </S.PokemonInfoDetail>
                  <S.PokemonInfoDetail>
                    <b>Shape:</b>
                    <p>{pokemonInfo?.shape}</p>
                  </S.PokemonInfoDetail>
                  <S.PokemonInfoDetail>
                    <b>Gender:</b>
                    <p>{pokemonInfo?.height}</p>
                  </S.PokemonInfoDetail>
                </S.PokemonInfoDetailsWrapper>
              </S.PokemonInfoDetails>
              <S.PokemonInfoType>
                <S.PokemonInfoTitle>Type:</S.PokemonInfoTitle>
                <S.PokemonInfoTypeWrapper>
                  {pokemonInfo?.types?.map((type: IPokemonType) => (
                    <PokemonType key={type.slot} type={type.type.name} />
                  ))}
                </S.PokemonInfoTypeWrapper>
              </S.PokemonInfoType>
              <S.PokemonInfoStatus>
                <S.PokemonInfoTitle>
                  {`${pokemonInfo?.name}'s`} Stats
                </S.PokemonInfoTitle>
                <S.PokemonInfoStatusWrapper>
                  {pokemonInfo?.stats?.map((stat: IStatType) => (
                    <PokemonStat key={stat.stat.name} stat={stat} />
                  ))}
                </S.PokemonInfoStatusWrapper>
              </S.PokemonInfoStatus>
            </S.PokemonInfoPrimary>
            <S.PokemonInfoSecondary>
              <S.PokemonInfoMain>
                <S.PokemonInfoName>{pokemonInfo?.name}</S.PokemonInfoName>
                <S.PokemonInfoDescription>
                  {pokemonInfo?.description}
                </S.PokemonInfoDescription>
              </S.PokemonInfoMain>
              <S.PokemonInfoEvolutions>
                <S.PokemonInfoTitle>Evolutionary Line:</S.PokemonInfoTitle>
                <S.PokemonInfoEvolutionsWrapper>
                  {pokemonInfo?.evolutions?.map(
                    (evolution: IFormattedEvolution) => (
                      <S.PokemonInfoEvolution
                        key={`${evolution.name}-evolution`}
                      >
                        <img src={evolution.image} alt="" />
                        <S.PokemonInfoEvolutionName>
                          {evolution.name}
                        </S.PokemonInfoEvolutionName>
                        <S.PokemonInfoEvolutionType>
                          {evolution?.types?.map((type: IPokemonType) => (
                            <PokemonType
                              key={type.slot}
                              type={type.type.name}
                              minified
                            />
                          ))}
                        </S.PokemonInfoEvolutionType>
                      </S.PokemonInfoEvolution>
                    )
                  )}
                </S.PokemonInfoEvolutionsWrapper>
              </S.PokemonInfoEvolutions>
            </S.PokemonInfoSecondary>
          </S.PokemonInfoWrapper>
        </S.PokemonMainWrapper>
      </S.PokemonMain>
    </S.PokemonPage>
  )
}

export default PokemonPage
