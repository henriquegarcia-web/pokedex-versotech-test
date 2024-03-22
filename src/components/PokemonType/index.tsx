import * as S from './styles'

interface IPokemonType {
  type: string
  minified?: boolean
}

const PokemonType = ({ type, minified = false }: IPokemonType) => {
  const typeIconSrc = `/images/pokemonTypes/${type}.png`

  return (
    <S.PokemonType minified={minified ? 1 : 0}>
      <S.PokemonTypeIcon src={typeIconSrc} />
      {!minified && type}
    </S.PokemonType>
  )
}

export default PokemonType
