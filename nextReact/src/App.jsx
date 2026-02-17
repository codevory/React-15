import { useState } from 'react'
import './index.css'
import './App.css'
import MouseTracker from './components/tracker/MouseTracker'
import MouseTrackerWithChildren from './components/tracker/MouseTrackerWithChildren'


function App() {
  return (
    <div className='bg-emerald-400 h-screen  flex flex-col gap-10'>
    <MouseTrackerWithChildren>
    {({x,y}) => (
      <p>position of Car : ({x}{y}) </p>
    )}
    </MouseTrackerWithChildren>

    <MouseTrackerWithChildren>
      {({x,y}) => (
        <p>Position of bike ({x}{y})</p>
      )}
    </MouseTrackerWithChildren>
    </div>
  )
}

export default App
