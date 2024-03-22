import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { PokemonType } from '@/components'

import { IFormattedEvolution, IPokemonType } from '@/@types/pokemonInfos'

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

export default PokemonEvolutionCard
