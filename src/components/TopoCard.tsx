import React, { useEffect, useState } from 'react'
import { getMatches, getUser, getUserMmr } from '../api/api'
import { getAmountOfWins } from '../helpers/getAmountOfWins'
import { getAverageAssists, getAverageDeaths, getAverageKills } from '../helpers/getAverages'
import { Matches, User } from '../types/types'

interface Props {
  id: number
  name: string
  profile: string
}

export const TopoCard = ({ id, name, profile }: Props) => {
  const [matches, setMatches] = useState<Matches[]>([])
  const [user, setUser] = useState<User>()

  useEffect(() => {
    getMatches(id)
      .then(res => {
        setMatches(res)
      })
    getUser(id)
      .then(res => {
        setUser(res)
      })

    getUserMmr(id)
      .then(res => {
        console.log(res)
      })
  }, [])

  const averageKills = Math.round(getAverageKills(matches) / 20)
  const averageDeaths = Math.round(getAverageDeaths(matches) / 20)
  const averageAssists = Math.round(getAverageAssists(matches) / 20)
  const wins = getAmountOfWins(matches)

  const userImg = user?.profile.avatarfull

  if (!wins) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='
      flex flex-col gap-3 p-5 bg-blue-200
      rounded-md shadow-md
      hover:shadow-xl duration-300 cursor-pointer
      '
    >
      <div className='flex'>
        <img className='border-4 border-black' src={userImg} width={75} alt='avatar' />
        <h2 className='ml-auto text-2xl font-bold'>{name}</h2>
      </div>
      <hr />
      <p >Win rate: {((wins * 100) / 20)} %
        {
          ((wins * 100) / 20) < 40 &&
            <span>{' <=='} Lmao</span>
        }

        {
          ((wins * 100) / 20) > 55 &&
            <span>{' <=='} Nice</span>
        }
      </p>
      <div className='flex flex-col gap-3'>
        <p>Mmr: {user?.mmr_estimate.estimate}</p>
        <div className='flex gap-5'>
          <p>Kills: {averageKills}</p>
          <p>Deaths: {averageDeaths}</p>
          <p>Assists: {averageAssists}</p>
        </div>
        <button
          className='p-1 mx-auto w-fit text-white bg-neutral-900 rounded-sm'
          onClick={() => window.open(profile, '_blank')}
        >
          More Info
        </button>
      </div>
    </div>
  )
}
