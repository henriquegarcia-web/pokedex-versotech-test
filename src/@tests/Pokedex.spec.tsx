import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { render, waitFor, screen } from '@testing-library/react'

import configureStore from 'redux-mock-store'

import { PokedexPage } from '@/pages'

jest.mock('@/api', () => require('./mocks/api/index'))

const mockStore = configureStore([])

describe('PokedexPage component', () => {
  let store: any

  beforeEach(() => {
    store = mockStore({
      pokemonsReducer: {
        pokemonList: [],
        totalCount: 0,
        offset: 0,
        nextPage: null,
        previousPage: null
      }
    })
  })

  test('renders PokedexPage component with loading state', async () => {
    const { getByTestId } = render(
      <Router>
        <Provider store={store}>
          <PokedexPage />
        </Provider>
      </Router>
    )

    const loadingElement = screen.getByTestId('pokemon-cards-skeleton')
    expect(loadingElement).toBeInTheDocument()

    await waitFor(() => {
      const pokemonCards = screen.queryByTestId('pokemon-cards')
      if (pokemonCards) {
        expect(pokemonCards.children.length).toBe(12)
      }
    })
  })
})
