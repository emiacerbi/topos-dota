export interface Topo {
  name: string
  steam32: number
  profile: string
}

export interface Matches {
  match_id: number
  player_slot: number
  radiant_win: boolean
  kills: number
  deaths: number
  assists: number
}
