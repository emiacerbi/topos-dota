import { Matches } from '../types/types'

export const getAmountOfWins = (playerMatches: Matches[]) => {
  return playerMatches.reduce((acc: number, el: Matches) => {
    if (el.radiant_win && el.player_slot < 100) {
      acc += 1
    }

    if (!el.radiant_win && el.player_slot > 10) {
      acc += 1
    }

    return acc
  }, 0)
}
