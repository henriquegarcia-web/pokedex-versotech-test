import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { pokemonData } from '@/data/mockPokemon'

interface IPokemonCard {}

const PokemonCard = ({}: IPokemonCard) => {
  return (
    <S.PokemonCard>
      <S.PokemonCardHeader>
        <b>{pokemonData.name}</b>
        <p>#{pokemonData.id}</p>
      </S.PokemonCardHeader>
      <S.PokemonCardMain>
        <S.PokemonCardTypes>
          {pokemonData.types.map((type) => (
            <PokemonType key={type.slot} type={type.type.name} />
          ))}
        </S.PokemonCardTypes>
        <S.PokemonCardImage>
          <MdCatchingPokemon />
          <S.PokemonImage
            src={pokemonData.sprites.other.home.front_default}
            alt={`pokemon-${pokemonData.name}-image`}
          />
        </S.PokemonCardImage>
      </S.PokemonCardMain>
    </S.PokemonCard>
  )
}

export default PokemonCard

// ========================================== POKEMON TYPE

interface IPokemonType {
  type: string
}

const PokemonType = ({ type }: IPokemonType) => {
  const typeIconSrc = `/images/pokemonTypes/${type}.png`

  return (
    <S.PokemonType>
      <S.PokemonTypeIcon src={typeIconSrc} />
      {type}
    </S.PokemonType>
  )
}
