import { useState } from 'react';
import { toast } from 'react-toastify';
import PostTypes from '../interfaces/PostTypes';

export function useUpdateLikesPost(post: PostTypes, id: string | undefined) {
  const [isLiked, setIsLiked] = useState(localStorage[`isLike${id}`])
  const [qtdLikes, setQtdLikes] = useState(JSON.parse(localStorage[`likes${id}`]))
  
  async function functionUpdateLikesPost() {
    if ((JSON.parse(sessionStorage.totalLikes)) > 9) {
      toast.error('Você fez muitas requisições! Aguarde...')
      return 
    }
    
    const header = new Headers({
      'Content-Type': 'application/json'
    })
    const body = JSON.stringify({
      user: `${import.meta.env.VITE_ENTRADA}`,
      password: `${import.meta.env.VITE_INICIAR}`,
      id: post._id
    })

    const incrementOrDecrement = isLiked ? 'decrement' : 'increment'
    const valueToAddOrRemove = isLiked ? -1 : 1
    
    isLiked ? localStorage.removeItem(`isLike${id}`) : localStorage[`isLike${id}`] = true
    localStorage[`likes${id}`] = JSON.stringify((JSON.parse(localStorage[`likes${id}`]) + valueToAddOrRemove))
    sessionStorage.totalLikes = JSON.stringify((JSON.parse(sessionStorage.totalLikes) + 1))

    setIsLiked(!isLiked)
    setQtdLikes((current: number) => current += valueToAddOrRemove)

    const result = await fetch(`https://blog-backend-arthur-candeia.vercel.app/likes/${incrementOrDecrement}`, {method: 'POST', headers: header, body})
    console.log(await result.json())
  }

  return {isLiked, qtdLikes, functionUpdateLikesPost}
}