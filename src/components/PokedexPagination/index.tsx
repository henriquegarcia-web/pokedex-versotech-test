import { ChangeEvent, useEffect, useState } from 'react'

import * as S from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface IPokedexPagination {
  currentOffset: number
  setCurrentOffset: (newValue: number) => void
  fetchPokemonList: (limit: number, offset: number) => void
  loading: boolean
  totalPokemonsCount: number
}

const PokedexPagination = ({
  currentOffset,
  setCurrentOffset,
  fetchPokemonList,
  loading,
  totalPokemonsCount
}: IPokedexPagination) => {
  const pageIndex = Math.floor(currentOffset / 12) + 1

  const [pagination, setPagination] = useState<string>(pageIndex.toString())

  const handleNextPage = () => {
    setCurrentOffset(currentOffset + 12)
    fetchPokemonList(12, currentOffset + 12)
  }

  const handlePreviousPage = () => {
    if (pageIndex === 1) return

    setCurrentOffset(currentOffset - 12)
    fetchPokemonList(12, currentOffset - 12)
  }

  const handleChangeIndexPage = (index: string) => {
    setPagination(index)
  }

  const handleBlurIndexPage = () => {
    const pageNumber = parseInt(pagination, 10)

    if (
      !isNaN(pageNumber) &&
      pageNumber >= 1 &&
      pageNumber <= Math.floor(totalPokemonsCount / 12)
    ) {
      const newOffset = (pageNumber - 1) * 12
      setCurrentOffset(newOffset)
      fetchPokemonList(12, newOffset)
    } else {
      setPagination(pageIndex.toString())
    }
  }

  useEffect(() => {
    setPagination((Math.floor(currentOffset / 12) + 1).toString())
  }, [currentOffset])

  return (
    <S.PokedexPagination>
      <button
        onClick={handlePreviousPage}
        disabled={pageIndex === 1 || loading}
      >
        <MdChevronLeft />
      </button>
      <S.PokedexPaginationInput>
        {loading ? (
          <AiOutlineLoading3Quarters />
        ) : (
          <input
            type="number"
            min={1}
            max={Math.floor(totalPokemonsCount / 12)}
            value={pagination}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangeIndexPage(e.target.value)
            }
            onBlur={handleBlurIndexPage}
          />
        )}
      </S.PokedexPaginationInput>
      <button onClick={handleNextPage} disabled={loading}>
        <MdChevronRight />
      </button>
    </S.PokedexPagination>
  )
}

export default PokedexPagination
