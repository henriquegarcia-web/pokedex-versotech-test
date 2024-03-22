import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { PokemonType } from '@/components'

interface IPokemonCard {
  pokemonData: any
}

const PokemonCard = ({ pokemonData }: IPokemonCard) => {
  const navigate = useNavigate()

  return (
    <S.PokemonCard onClick={() => navigate(`/pokedex/${pokemonData.id}`)}>
      <S.PokemonCardHeader>
        <b>{pokemonData.name}</b>
        <p>#{pokemonData.id}</p>
      </S.PokemonCardHeader>
      <S.PokemonCardMain>
        <S.PokemonCardTypes>
          {pokemonData.types.map((type: any) => (
            <PokemonType key={type.slot} type={type.type.name} />
          ))}
        </S.PokemonCardTypes>
        <S.PokemonCardImage>
          <MdCatchingPokemon />
          <S.PokemonImage
            className="pokemon-image"
            src={pokemonData.sprites.other.home.front_default}
            alt={`pokemon-${pokemonData.name}-image`}
          />
        </S.PokemonCardImage>
      </S.PokemonCardMain>
    </S.PokemonCard>
  )
}

export default PokemonCard
