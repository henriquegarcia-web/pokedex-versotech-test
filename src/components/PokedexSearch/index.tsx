import * as S from './styles'

interface IPokedexSearch {}

const PokedexSearch = ({}: IPokedexSearch) => {
  return (
    <S.PokedexHeaderSearch>
      <S.PokedexSearchInput
        type="text"
        placeholder="Pokemon name or type or number "
      />
      <S.PokedexSearchButton>Search</S.PokedexSearchButton>
    </S.PokedexHeaderSearch>
  )
}

export default PokedexSearch
