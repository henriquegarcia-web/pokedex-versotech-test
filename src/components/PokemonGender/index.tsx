import { useMemo } from 'react'
import * as S from './styles'
import { FaVenus, FaMars, FaVenusMars, FaGenderless } from 'react-icons/fa6'

interface IPokemonGender {
  genderRate: number
}

export const PokemonGender = ({ genderRate }: IPokemonGender) => {
  const renderPokemonGender = useMemo(() => {
    let icons = []

    switch (genderRate) {
      case -1:
        icons.push(<FaGenderless key="genderless" />)
        break
      case 1:
        icons.push(<FaVenus key="female" />)
        break
      case 8:
        icons.push(<FaVenusMars key="male" />)
        icons.push(<FaVenus key="female" />)
        break
      default:
        icons.push(<FaGenderless key="genderless" />)
        break
    }

    return icons
  }, [genderRate])

  return <S.PokemonGender>{renderPokemonGender}</S.PokemonGender>
}
export default PokemonGender
