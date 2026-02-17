import { Children, useState } from 'react'
import './index.css'
import './App.css'
import MouseTracker from './components/tracker/MouseTracker'
import MouseTrackerWithChildren from './tracker/MouseTrackerWithChildren'

function App() {
  return (

    //  <div className=''>
    // <MouseTracker render={(pos) => (
    //   <p>position of Car : ({pos.x}{pos.y})</p>
    // )} />
    // </div> 

    <div className='bg-gray-300 flex flex-col justify-content'>
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
