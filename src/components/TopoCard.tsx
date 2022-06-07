import React, { useEffect, useState } from 'react'
import { getMatches } from '../api/api'
import { getAmountOfWins } from '../helpers/getAmountOfWins'
import { Matches } from '../types/types'

interface Props {
  id: number
  name: string
}

export const TopoCard = ({ id, name }: Props) => {
  const [matches, setMatches] = useState<Matches[]>([])

  useEffect(() => {
    getMatches(id)
      .then(res => setMatches(res))
  }, [])

  const wins = getAmountOfWins(matches)

  return (
    <div>
      <p>{name}</p>
      <p>{wins}</p>

    </div>
  )
}
