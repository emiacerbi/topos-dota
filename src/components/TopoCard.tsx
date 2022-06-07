import React, { useEffect, useState } from 'react'
import { getMatches } from '../api/api'
import { getAmountOfWins } from '../helpers/getAmountOfWins'
import { getAverageAssists, getAverageDeaths, getAverageKills } from '../helpers/getAverages'
import { Matches } from '../types/types'

interface Props {
  id: number
  name: string
}

export const TopoCard = ({ id, name }: Props) => {
  const [matches, setMatches] = useState<Matches[]>([])
  const [wins, setWins] = useState<number>()

  useEffect(() => {
    getMatches(id)
      .then(res => {
        setMatches(res)
        setWins(getAmountOfWins(res))
      })
  }, [])

  const averageKills = getAverageKills(matches) / 20
  const averageDeaths = getAverageDeaths(matches) / 20
  const averageAssists = getAverageAssists(matches) / 20

  return (
    <div className='flex gap-5'>
      <p>{name}:</p>
      <p>Wins: {wins}</p>
      <p>Kills: {averageKills}</p>
      <p>Deaths: {averageDeaths}</p>
      <p>Assists: {averageAssists}</p>
    </div>
  )
}
