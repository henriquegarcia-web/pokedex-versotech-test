import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { PokemonCard } from '@/components'

const PokedexPage = () => {
  return (
    <S.PokedexPage>
      <S.PokedexHeader>
        <S.PokedexHeaderWrapper>
          <S.PokedexHeaderTitle>
            <MdCatchingPokemon />
            PokéDex
          </S.PokedexHeaderTitle>
          <PokedexSearch />
        </S.PokedexHeaderWrapper>
      </S.PokedexHeader>
      <S.PokedexMain>
        <S.PokedexMainWrapper>
          <S.PokedexMainFilters></S.PokedexMainFilters>
          <S.PokedexMainList>
            <PokemonCard />
          </S.PokedexMainList>
        </S.PokedexMainWrapper>
      </S.PokedexMain>
    </S.PokedexPage>
  )
}

export default PokedexPage

// ======================================== POKEDEX SEARCH INPUT

interface IPokedexSearch {}

const PokedexSearch = ({}: IPokedexSearch) => {
  return (
    <S.PokedexHeaderSearch>
      <S.PokedexSearchInput
        type="text"
        placeholder="Procure por nome, etc ..."
      />
      <S.PokedexSearchButton>Pesquisar</S.PokedexSearchButton>
    </S.PokedexHeaderSearch>
  )
}
