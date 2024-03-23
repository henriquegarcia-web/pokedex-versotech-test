import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as S from './styles'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

import {
  Header,
  PokemonEvolutionCard,
  PokemonGender,
  PokemonStat,
  PokemonType
} from '@/components'

import api from '@/api'
import { IRootState } from '@/redux/root-reducer'

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

  const { totalCount } = useSelector(
    (rootReducer: IRootState) => rootReducer.pokemonsReducer
  )

  const [pokemonFetching, setPokemonFetching] = useState(false)
  const [pokemonError, setPokemonError] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonInfo | null>(null)

  const formatEvolution = async (
    evolution: IEvolution
  ): Promise<IFormattedEvolution> => {
    try {
      const response = await api.get(`pokemon/${evolution.species?.name}`)
      const data = response.data
      return {
        id: data.id,
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
      setPokemonError(false)
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
        gender_rate: speciesData?.gender_rate || -1,
        types: data.types,
        stats: data.stats,
        description:
          speciesData?.flavor_text_entries[4]?.flavor_text || 'No registry',
        color: speciesData?.color?.name || 'No registry',
        category:
          speciesData?.genera[7]?.genus?.replace(' Pokémon', '') ||
          'No registry',
        generation:
          speciesData?.generation?.name?.replace('generation-', '') ||
          'No registry',
        shape: speciesData?.shape?.name || 'No registry',
        evolutions: evolutionChainData,
        is_legendary: speciesData?.is_legendary || false,
        is_mythical: speciesData?.is_mythical || false
      }

      setPokemonInfo(pokemonInfo)
    } catch (error) {
      console.error('Error fetching Pokémon infos:', error)
      setPokemonInfo(null)
      setPokemonError(true)
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
    if (nextPageIndex <= 0 || nextPageIndex > totalCount) return

    navigate(`/pokedex/${nextPageIndex}`)
  }

  const renderEvolutionsSkeleton = () => {
    const evolutionsCards = []
    for (let i = 0; i < 3; i++) {
      evolutionsCards.push(
        <S.PokemonEvolutionSkeleton key={`pokemon-evolutions-${i}`} />
      )
    }
    return evolutionsCards
  }

  const renderInfosSkeleton = () => {
    const infosCards = []
    for (let i = 0; i < 6; i++) {
      infosCards.push(<S.PokemonInfosSkeleton key={`pokemon-infos-${i}`} />)
    }
    return infosCards
  }

  return (
    <S.PokemonPage>
      <Header />
      <S.PokemonMain>
        <S.PokemonMainWrapper>
          <S.PokemonInfoHeader>
            <button
              onClick={() => handlePageNavigation(false)}
              disabled={pokemonError || pageIndex - 1 <= 0}
            >
              <HiArrowLeft />
            </button>
            {pokemonFetching ? (
              <S.PageIndicatorSkeleton />
            ) : (
              <span>
                {pokemonInfo?.id} / <b>{totalCount}</b>
              </span>
            )}
            <button
              onClick={() => handlePageNavigation(true)}
              disabled={pokemonError || pageIndex + 1 >= totalCount}
            >
              <HiArrowRight />
            </button>
          </S.PokemonInfoHeader>
          {pokemonError ? (
            <S.PokemonInfoError>
              <img src="/images/not_found.svg" alt="Not Found Pokemon Image" />
              <p>
                <b>Ooops!</b> Pokemon data not found
              </p>
              <S.PokemonInfoErrorButton onClick={() => navigate('/pokedex')}>
                Back to home
              </S.PokemonInfoErrorButton>
            </S.PokemonInfoError>
          ) : (
            <S.PokemonInfoWrapper>
              <S.PokemonInfoPrimary>
                {pokemonFetching ? (
                  <S.PokemonHeaderSkeleton />
                ) : (
                  <S.PokemonInfoPrimaryHeader>
                    {pokemonInfo?.name}
                  </S.PokemonInfoPrimaryHeader>
                )}
                <S.PokemonInfoPrimaryWrapper>
                  {pokemonFetching ? (
                    <S.PokemonImageSkeleton />
                  ) : (
                    <S.PokemonInfoImage>
                      <img src={pokemonInfo?.image} alt="" />
                    </S.PokemonInfoImage>
                  )}
                  {pokemonFetching ? (
                    <S.PokemonDescriptionSkeleton />
                  ) : (
                    <S.PokemonInfoDescription>
                      {pokemonInfo?.description}
                    </S.PokemonInfoDescription>
                  )}
                  <S.PokemonInfoEvolutions>
                    <S.PokemonInfoTitle>Evolutionary Line:</S.PokemonInfoTitle>
                    <S.PokemonInfoEvolutionsWrapper>
                      {pokemonFetching
                        ? renderEvolutionsSkeleton()
                        : pokemonInfo?.evolutions?.map(
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
                {pokemonFetching ? (
                  <S.PokemonHeaderSkeleton />
                ) : (
                  <S.PokemonInfoSecondaryHeader>
                    {`${pokemonInfo?.name}'s`} Details
                  </S.PokemonInfoSecondaryHeader>
                )}
                <S.PokemonInfoSecondaryWrapper>
                  <S.PokemonInfoDetails>
                    <S.PokemonInfoTitle>Main Infos</S.PokemonInfoTitle>
                    <PokemonMainInfos
                      pokemonInfo={pokemonInfo}
                      pokemonFetching={pokemonFetching}
                    />
                  </S.PokemonInfoDetails>
                  <S.PokemonInfoType>
                    <S.PokemonInfoTitle>Type:</S.PokemonInfoTitle>
                    <S.PokemonInfoTypeWrapper>
                      {pokemonFetching ? (
                        <S.PokemonTypeSkeleton />
                      ) : (
                        pokemonInfo?.types?.map((type: IPokemonType) => (
                          <PokemonType key={type.slot} type={type.type.name} />
                        ))
                      )}
                    </S.PokemonInfoTypeWrapper>
                  </S.PokemonInfoType>
                  <S.PokemonInfoStatus>
                    <S.PokemonInfoTitle>Stats:</S.PokemonInfoTitle>
                    <S.PokemonInfoStatusWrapper>
                      {pokemonFetching
                        ? renderInfosSkeleton()
                        : pokemonInfo?.stats?.map((stat: IStatType) => (
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
  pokemonFetching: boolean
}

const PokemonMainInfos = ({
  pokemonInfo,
  pokemonFetching
}: IPokemonMainInfos) => {
  const renderMainInfosSkeleton = () => {
    const infosCards = []
    for (let i = 0; i < 6; i++) {
      infosCards.push(
        <S.PokemonMainInfosSkeleton key={`pokemon-main-infos-${i}`} />
      )
    }
    return infosCards
  }

  return (
    <S.PokemonMainInfos>
      {pokemonFetching ? (
        renderMainInfosSkeleton()
      ) : (
        <>
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
            <p>
              <PokemonGender genderRate={pokemonInfo?.gender_rate || -1} />
            </p>
          </S.PokemonMainInfoWrapper>
        </>
      )}
    </S.PokemonMainInfos>
  )
}
