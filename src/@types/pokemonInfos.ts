export interface EvolutionDetails {
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

export interface Evolution {
  evolution_details: EvolutionDetails[]
  evolves_to: Evolution[]
  is_baby: boolean
  species: {
    name: string
    url: string
  }
}
