import React,{ useState } from 'react'

const MouseTracker = ({render}) => {
    const [pos, setPos] = useState({x:0,y:0})

    function handleMovement(e){
     setPos({x:e.clientX,y:e.clientY})
    }
  return (
    <div onMouseMove={(e) => handleMovement(e)} className='border outline-1 h-40 w-full bg-red-400 '>
    <div>
        {render(pos)}
        </div> 
    </div>
  )
}

export default MouseTracker
