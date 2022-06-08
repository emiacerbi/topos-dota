// import React from 'react'

export const getMatches = async (id: number) => {
  const URL = `https://api.opendota.com/api/players/${id}/recentMatches`
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      return data
    })
}

export const getUser = async (id: number) => {
  const URL = `https://api.opendota.com/api/players/${id}`
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      return data
    })
}

export const getUserMmr = async (id: number) => {
  const URL = `https://api.opendota.com/api/players/${id}/ratings`
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      return data
    })
}
