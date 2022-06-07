import React, { useEffect, useState } from 'react'
import { getMatches } from '../api/api'
import { getAmountOfWins } from '../helpers/getAmountOfWins'
import { Matches } from '../types/types'

export const Nacho = () => {
  const [nachoMatches, setNachoMatches] = useState<Matches[]>([])

  useEffect(() => {
    getMatches(83779932)
      .then(res => {
        setNachoMatches(res)
      })
  }, [])

  const nachoWins = getAmountOfWins(nachoMatches)

  return (
    <div>
      Nacho
      <p>Gano {nachoWins}</p>
    </div>
  )
}
