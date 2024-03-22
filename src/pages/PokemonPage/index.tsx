import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as S from './styles'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

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
  const navigate = useNavigate()
  const params = useParams()
  const { pokemonId } = params

  const [pokemonFetching, setPokemonFetching] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo | null>(null)

  const formatEvolution = async (
    evolution: IEvolution
  ): Promise<IFormattedEvolution> => {
    try {
      const response = await api.get(`pokemon/${evolution.species?.name}`)
      const data = response.data
      return {
        name: evolution.species?.name,
        image: data.sprites.other.home.front_default,
        types: data.types
      }
    } catch (error) {
      console.error(`Error formatting evolution: ${error}`)
      throw error
    }
  }

  const formatEvolutions = async (
    evolutionChain: IEvolution
  ): Promise<IFormattedEvolution[]> => {
    const formattedEvolutions: IFormattedEvolution[] = []

    const traverseEvolutionChain = async (chain: IEvolution): Promise<void> => {
      try {
        const formattedEvolution = await formatEvolution(chain)
        formattedEvolutions.push(formattedEvolution)

        if (chain.evolves_to?.length) {
          await Promise.all(chain.evolves_to.map(traverseEvolutionChain))
        }
      } catch (error) {
        console.error(`Error traversing evolution chain: ${error}`)
        throw error
      }
    }

    await traverseEvolutionChain(evolutionChain)
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
  }, [pokemonId])

  const pageIndex = useMemo(() => {
    if (!pokemonId) return 1
    return parseInt(pokemonId)
  }, [pokemonId])

  const handlePageNavigation = (isNext: boolean) => {
    const nextPageIndex = isNext ? pageIndex + 1 : pageIndex - 1
    if (nextPageIndex <= 0 || nextPageIndex > 1300) return

    navigate(`/pokedex/${nextPageIndex}`)
  }

  return (
    <S.PokemonPage>
      <Header />
      <S.PokemonMain>
        <S.PokemonMainWrapper>
          <S.PokemonInfoHeader>
            <button
              onClick={() => handlePageNavigation(false)}
              disabled={pageIndex - 1 <= 0}
            >
              <HiArrowLeft />
            </button>
            <span>
              {pokemonInfo?.id} / <b>1300</b>
            </span>
            <button
              onClick={() => handlePageNavigation(true)}
              disabled={pageIndex + 1 >= 1300}
            >
              <HiArrowRight />
            </button>
          </S.PokemonInfoHeader>
          {pokemonFetching ? (
            <S.PokemonInfoLoading>
              <AiOutlineLoading3Quarters />
            </S.PokemonInfoLoading>
          ) : (
            <S.PokemonInfoWrapper>
              <S.PokemonInfoPrimary>
                <S.PokemonInfoPrimaryHeader>
                  {pokemonInfo?.name}
                </S.PokemonInfoPrimaryHeader>
                <S.PokemonInfoPrimaryWrapper>
                  <S.PokemonInfoImage>
                    <img src={pokemonInfo?.image} alt="" />
                  </S.PokemonInfoImage>
                  <S.PokemonInfoDescription>
                    {pokemonInfo?.description}
                  </S.PokemonInfoDescription>
                  <S.PokemonInfoEvolutions>
                    <S.PokemonInfoTitle>Evolutionary Line:</S.PokemonInfoTitle>
                    <S.PokemonInfoEvolutionsWrapper>
                      {pokemonInfo?.evolutions?.map(
                        (evolution: IFormattedEvolution) => (
                          <PokemonEvolutionCard
                            key={`${evolution.name}-evolution`}
                            evolution={evolution}
                          />
                        )
                      )}
                    </S.PokemonInfoEvolutionsWrapper>
                  </S.PokemonInfoEvolutions>
                </S.PokemonInfoPrimaryWrapper>
              </S.PokemonInfoPrimary>
              <S.PokemonInfoSecondary>
                <S.PokemonInfoSecondaryHeader>
                  {`${pokemonInfo?.name}'s`} Details
                </S.PokemonInfoSecondaryHeader>
                <S.PokemonInfoSecondaryWrapper>
                  <S.PokemonInfoDetails>
                    <S.PokemonInfoTitle>Main Infos</S.PokemonInfoTitle>
                    <PokemonMainInfos pokemonInfo={pokemonInfo} />
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
                </S.PokemonInfoSecondaryWrapper>
              </S.PokemonInfoSecondary>
            </S.PokemonInfoWrapper>
          )}
        </S.PokemonMainWrapper>
      </S.PokemonMain>
    </S.PokemonPage>
  )
}

export default PokemonPage

// =============================== POKEMON MAIN INFOS

interface IPokemonMainInfos {
  pokemonInfo: IPokemonInfo | null
}

const PokemonMainInfos = ({ pokemonInfo }: IPokemonMainInfos) => {
  return (
    <S.PokemonMainInfos>
      <S.PokemonMainInfoWrapper>
        <b>Category:</b>
        <p>{pokemonInfo?.category}</p>
      </S.PokemonMainInfoWrapper>
      <S.PokemonMainInfoWrapper>
        <b>Generation:</b>
        <p>{pokemonInfo?.generation}</p>
      </S.PokemonMainInfoWrapper>
      <S.PokemonMainInfoWrapper>
        <b>Height:</b>
        <p>{pokemonInfo?.height}</p>
      </S.PokemonMainInfoWrapper>
      <S.PokemonMainInfoWrapper>
        <b>Weight:</b>
        <p>{pokemonInfo?.weight}</p>
      </S.PokemonMainInfoWrapper>
      <S.PokemonMainInfoWrapper>
        <b>Shape:</b>
        <p>{pokemonInfo?.shape}</p>
      </S.PokemonMainInfoWrapper>
      <S.PokemonMainInfoWrapper>
        <b>Gender:</b>
        <p>{pokemonInfo?.height}</p>
      </S.PokemonMainInfoWrapper>
    </S.PokemonMainInfos>
  )
}

// =============================== POKEMON EVOLUTION CARD

interface IPokemonEvolutionCard {
  evolution: IFormattedEvolution
}

const PokemonEvolutionCard = ({ evolution }: IPokemonEvolutionCard) => {
  const navigate = useNavigate()

  return (
    <S.PokemonEvolutionCard
      onClick={() => navigate(`/pokedex/${evolution.name}`)}
    >
      <S.PokemonEvolutionCardImage src={evolution.image} alt="" />
      <S.PokemonEvolutionCardName>{evolution.name}</S.PokemonEvolutionCardName>
      <S.PokemonEvolutionCardType>
        {evolution?.types?.map((type: IPokemonType) => (
          <PokemonType key={type.slot} type={type.type.name} minified />
        ))}
      </S.PokemonEvolutionCardType>
    </S.PokemonEvolutionCard>
  )
}
