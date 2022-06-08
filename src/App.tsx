import React, { useEffect, useState } from 'react'
import { TopoCard } from './components/TopoCard'

import { topos } from './data/topos'
import { Topo } from './types/types'

function App () {
  const [toposList, setToposList] = useState<Topo[]>([])

  useEffect(() => {
    setToposList(topos)
  }, [])

  return (
    <div className='container grid place-content-center mx-auto h-screen'>
      <h1 className='-mt-10 text-4xl font-bold text-center text-slate-900'>TOPO DOTA</h1>

      <main className='grid grid-cols-3 gap-5 place-content-center mt-10'>

        {
          toposList
            .map(topo => (
              <TopoCard
                key={topo.steam32}
                id={topo.steam32}
                name={topo.name}
                profile={topo.profile}
              />
            ))
        }

      </main>

    </div>
  )
}

export default App
