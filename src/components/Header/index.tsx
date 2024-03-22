import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { PokedexSearch } from '@/components'

const Header = () => {
  return (
    <S.PokedexHeader>
      <S.PokedexHeaderWrapper>
        <S.PokedexHeaderTitle>
          <MdCatchingPokemon />
          PokéDex
        </S.PokedexHeaderTitle>
        <PokedexSearch />
      </S.PokedexHeaderWrapper>
    </S.PokedexHeader>
  )
}

export default Header
