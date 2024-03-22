import styled from 'styled-components'
import { pageWrapperLimit } from '@/utils/styles/globals'

export const PokedexPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

export const PokedexMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0;
`

export const PokedexMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: ${pageWrapperLimit};
  padding: 0 20px;
`

// --------------------- POKEMON LIST HEADER

export const PokedexMainListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`

// --------------------- POKEMON LIST MAIN

export const PokedexMainList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`

// --------------------- POKEMON LIST FOOTER

export const PokedexMainListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`
