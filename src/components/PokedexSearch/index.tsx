import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { Controller, useForm } from 'react-hook-form'
import api from '@/api'

interface ISearchForm {
  userSearch: string
}

interface IPokedexSearch {}

const PokedexSearch = ({}: IPokedexSearch) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [searchIsLoading, setSearchIsLoading] = useState(false)

  const { control, handleSubmit, reset, formState } = useForm<ISearchForm>({
    defaultValues: { userSearch: '' }
  })

  const { isValid } = formState

  const handleSearch = async (data: ISearchForm) => {
    setSearchIsLoading(true)

    try {
      const response = await api.get(`pokemon/${data.userSearch}`)
      const searchResponse = response.data

      setSearchIsLoading(false)

      if (searchResponse) {
        reset()
        navigate(`/pokedex/${data.userSearch}`)
      } else {
        throw new Error('The search term does not exist.')
      }
    } catch (error) {
      console.error(error)
      dispatch({
        type: 'SHOW_ALERT',
        payload: {
          type: 'error',
          message: 'The search term does not exist.'
        }
      })
      setSearchIsLoading(false)
    }
  }

  return (
    <S.PokedexHeaderSearch onSubmit={handleSubmit(handleSearch)}>
      <Controller
        name="userSearch"
        control={control}
        rules={{
          required: 'This field is required'
        }}
        render={({ field }) => (
          <S.PokedexSearchInput
            {...field}
            type="text"
            placeholder="Exact pokemon name or number"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const newValue = e.target.value.replace(/[^a-zA-Z0-9\s]/g, '')
              field.onChange(newValue)
            }}
          />
        )}
      />
      <S.PokedexSearchButton
        type="submit"
        disabled={!isValid || searchIsLoading}
      >
        Search
      </S.PokedexSearchButton>
    </S.PokedexHeaderSearch>
  )
}

export default PokedexSearch
