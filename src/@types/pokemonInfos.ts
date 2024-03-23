export interface IEvolutionDetails {
  gender: string | null
  held_item: string | null
  item: string | null
  known_move: string | null
  known_move_type: string | null
  location: string | null
  min_affection: number | null
  min_beauty: number | null
  min_happiness: number | null
  min_level: number | null
  needs_overworld_rain: boolean
  party_species: string | null
  party_type: string | null
  relative_physical_stats: number | null
  time_of_day: string
  trade_species: string | null
  trigger: {
    name: string
    url: string
  }
  turn_upside_down: boolean
}

export interface IEvolution {
  evolution_details: IEvolutionDetails[]
  evolves_to: IEvolution[]
  is_baby: boolean
  species: {
    name: string
    url: string
  }
}

export interface IFormattedEvolution {
  id: string
  name: string
  image: string
  types: IPokemonType[]
}

export interface IPokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface IStatType {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface IPokemonInfo {
  image: string
  id: string
  name: string
  height: string
  weight: string
  gender_rate: number
  types: IPokemonType[]
  stats: IStatType[]
  description: string
  color: string
  category: string
  generation: string
  shape: string
  evolutions: IFormattedEvolution[]
  is_legendary: string
  is_mythical: string
}

export interface IPokemonCardInfo {
  id: string
  name: string
  image: string
  types: IPokemonType[]
}
