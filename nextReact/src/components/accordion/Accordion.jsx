import React,{useState} from 'react'

const Accordion = ({children,isOpen}) => {
  return (
    <div>
      {children}
    </div>
  )
}

function accordionItem({children,title}){
const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <button className='accordion-title' onClick={() => setIsOpen(!isOpen)}>{title}</button>
            {isOpen && <div className='accordion-content'>{children}</div>}
        </div>
    )
}

Accordion.Item = accordionItem;

export default Accordion
