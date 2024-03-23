import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { PokedexLogo, PokedexSearch } from '@/components'

const Header = () => {
  return (
    <S.PokedexHeader>
      <S.PokedexHeaderWrapper>
        <PokedexLogo />
        <PokedexSearch />
      </S.PokedexHeaderWrapper>
    </S.PokedexHeader>
  )
}

export default Header
