import * as S from './styles'

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

export default PokemonType
