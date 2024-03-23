import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

import { PokedexSearch } from '@/components'

const Header = () => {
  const navigate = useNavigate()

  return (
    <S.PokedexHeader>
      <S.PokedexHeaderWrapper>
        <S.PokedexHeaderTitle onClick={() => navigate('/pokedex')}>
          <h1>
            P
            <MdCatchingPokemon />
            keDex
          </h1>
        </S.PokedexHeaderTitle>
        <PokedexSearch />
      </S.PokedexHeaderWrapper>
    </S.PokedexHeader>
  )
}

export default Header
