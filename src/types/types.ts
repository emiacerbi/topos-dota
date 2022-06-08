export interface Topo {
  name: string
  steam32: number
  profile: string
}

export interface User {
  mmr_estimate: {
    estimate: number
  }

  profile: {
    personaname: string
    avatarfull: string
  }
}

export interface Matches {
  match_id: number
  player_slot: number
  radiant_win: boolean
  kills: number
  deaths: number
  assists: number
}
