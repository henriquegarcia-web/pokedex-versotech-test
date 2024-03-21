import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LandingPage, PokedexPage, PokemonPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokedex/:pokemonId" element={<PokemonPage />} />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

// interface RouteProps {
//   isAuthenticated: boolean
//   children: React.ReactNode
// }

// const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />
//   }

//   return children
// }

// const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
//   if (isAuthenticated) {
//     return <Navigate to="/" />
//   }

//   return children
// }
