import { useState } from 'react'
import './index.css'
import './App.css'
import MouseTracker from './components/tracker/MouseTracker'
import MouseTrackerWithChildren from './components/tracker/MouseTrackerWithChildren'
import Form from './components/Form'


function App() {
  return (
    <div className='bg-emerald-400 h-screen  flex flex-col gap-10'>

    <Form />
    </div>
  )
}

export default App
