
const Modal = ({children,onClose,isOpen}) => {
    if(!isOpen) return null;
  return (
    <div className="modal-backdrop">
        <div className="modal-container">
            {children}
            <button className="modal-close" onClick={onClose}>X</button>
        </div>
      
    </div>
  )
}


function modalHeader({children}){
    
    return <div className="modal-header">
        {children}
    </div>
}

function modalBody({children}){
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}

function modalFooter({children}){
    return (
        <div className="modal-footer">
            {children}
        </div>
    )
}

//attach componnets
Modal.Header = modalHeader;
Modal.Body = modalBody;
Modal.Footer = modalFooter;


export default Modal

