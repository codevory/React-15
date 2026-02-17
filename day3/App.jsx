import { useState } from 'react'
import './index.css'
import './App.css'
import ControlledFroms from './components/controlledFroms'
import Modal from './components/Modal'
import AccordionDemo from './components/accordion/AccordionDemo'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button className='bg-black text-2xl font-semibold px-4 py-2 m-2 rounded text-white' onClick={() => setIsOpen(true)} >open Modal</button>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
   <Modal.Header>
    <h1>Welcome to Modal</h1>
   </Modal.Header>

   <Modal.Body>
    <p>Modal Body by Me</p>
    <AccordionDemo />
   </Modal.Body>

   <Modal.Footer>
    <button className='' onClick={() => setIsOpen(false)}>Close</button>
    <button>help</button>
   </Modal.Footer>
    </Modal>
   
    </div>
  )
}

export default App
