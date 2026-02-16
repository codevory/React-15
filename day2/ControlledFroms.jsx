import { useState, useRef } from 'react'


const ControlledFroms = () => {
    const [formData, setFormData] = useState({name:"",email:"",message:""})
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    function handleChange(e){
     const {name, value} = e.target;
     setFormData({...formData,[name]:value})
    }

    function handleSubmit(e){
    e.preventDefault();
    if(!formData.name){
        nameRef.current.focus();
        return;
    }
    if(!formData.email.includes("@")){
        emailRef.current.focus();
        return;
    }
    if(!formData.message){
        messageRef.current.focus();
        return;
    }
    console.log("form submitted ", formData)
    }


  return (
    <form className='flex flex-col ' onSubmit={handleSubmit}>
    <input className="border rounded-2xl p-2 my-3"
    type='text' 
    name='name' 
    ref={nameRef} 
    value={formData.name} 
    placeholder='Name'
    onChange={handleChange} />

    <input className="border rounded-2xl p-2 my-3"
    name='email'
    type="email"
     ref={emailRef}
     value={formData.email}
     placeholder='email'
     onChange={handleChange}
    />

    <input className="border rounded-2xl p-2 my-3"
    type='text'
    name='message'
    ref={messageRef}
    value={formData.message}
    placeholder='Message'
    onChange={handleChange}
    />
    <button
        className="bg-purple-500 text-white p-1 rounded"
        type="submit" >
        Send Feedback
    </button>
  </form>
  )
}

export default ControlledFroms
