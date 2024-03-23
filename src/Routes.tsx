import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { PokedexPage, PokemonPage } from './pages'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Navigate to="/pokedex" />} />
        <Route path="*" element={<Navigate to="/pokedex" />} />

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
