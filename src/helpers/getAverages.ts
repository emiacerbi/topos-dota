import { Matches } from '../types/types'

export const getAverageKills = (playerMatches: Matches[]) => {
  return playerMatches.reduce((acc: number, el: Matches) => {
    acc += el.kills

    return acc
  }, 0)
}

export const getAverageDeaths = (playerMatches: Matches[]) => {
  return playerMatches.reduce((acc: number, el: Matches) => {
    acc += el.deaths

    return acc
  }, 0)
}

export const getAverageAssists = (playerMatches: Matches[]) => {
  return playerMatches.reduce((acc: number, el: Matches) => {
    acc += el.assists

    return acc
  }, 0)
}
