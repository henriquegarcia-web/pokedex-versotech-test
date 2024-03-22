import * as S from './styles'

import { IStatType } from '@/@types/pokemonInfos'

interface IPokemonStat {
  stat: IStatType
}

const PokemonStat = ({ stat }: IPokemonStat) => {
  return (
    <S.PokemonStat>
      <S.PokemonStatLabel>{stat.stat.name}</S.PokemonStatLabel>
      <S.PokemonStatBar>
        <S.PokemonStatFill width={stat.base_stat} />
      </S.PokemonStatBar>
    </S.PokemonStat>
  )
}

export default PokemonStat
