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
    <div className='container mx-auto h-screen'>
      <h1 className='text-slate-900 font-bold text-center'>Topo Dota</h1>

      <div className='mt-5'>

        {
          toposList
            .map(topo => (
              <TopoCard
                key={topo.steam32}
                id={topo.steam32}
                name={topo.name}
              />
            ))
        }

      </div>

    </div>
  )
}

export default App
