import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { MdCatchingPokemon } from 'react-icons/md'

const PokedexLogo = () => {
  const navigate = useNavigate()

  return (
    <S.PokedexLogo onClick={() => navigate('/pokedex')}>
      <h1>
        P
        <MdCatchingPokemon />
        keDex
      </h1>
    </S.PokedexLogo>
  )
}

export default PokedexLogo
