import { useState,useOptimistic,startTransition } from 'react'

const Button = ({initialValue=0,postId}) => {

    const [like , setLike] = useState(initialValue)

    const [opLikes, updateLike] = useOptimistic(like,(currentLikes,delta) => currentLikes + delta)
    
  async function handleLikeFn(){
  updateLike(1)
  try {
    await serverResponse(postId)
    setLike((prev) => prev + 1)
  } catch (error) {
    console.error(error.message)
    setLike((s) => s)
  }
    }

   async function serverResponse(){
      await new Promise((r) => setTimeout(r,1000))

if(Math.random() < 0.2) throw new Error("Network Failed")
        console.log("server call made for : ", postId)
        return {success:true}
    }
  return (
   <button className='w-20 h-4 text-2xl font-bold cursor-pointer' onClick={() =>startTransition(async () => handleLikeFn())}>❤️ {opLikes}</button>
  )
}

export default Button
