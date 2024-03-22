import * as S from './styles'

interface IPokedexPageRange {
  currentOffset: number
}

const PokedexPageRange = ({ currentOffset }: IPokedexPageRange) => {
  const pageIndex = Math.floor(currentOffset / 12) + 1

  const rangeMin = ((pageIndex - 1) * 12 + 1).toString().padStart(4, '0')
  const rangeMax = (pageIndex * 12).toString().padStart(4, '0')

  return (
    <S.PokedexPageRange>
      <p>Page range:</p>
      <span>{rangeMin}</span>-<span>{rangeMax}</span>
    </S.PokedexPageRange>
  )
}

export default PokedexPageRange
