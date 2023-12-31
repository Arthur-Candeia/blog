import { useState } from 'react';
import { toast } from 'react-toastify';
import PostTypes from '../interfaces/PostTypes';

export function useUpdateLikesPost(post: PostTypes, id: string | undefined) {
  const [isLiked, setIsLiked] = useState(localStorage[`isLike${id}`])
  const [qtdLikes, setQtdLikes] = useState(post?.likes)
  
  async function functionUpdateLikesPost() {
    if ((JSON.parse(sessionStorage.totalLikes)) > 9) {
      toast.error('Você fez muitas requisições! Aguarde...')
      return 
    }

    const incrementOrDecrement = isLiked ? 'decrement' : 'increment'
    const valueToAddOrRemove = isLiked ? -1 : 1
    
    isLiked ? localStorage.removeItem(`isLike${id}`) : localStorage[`isLike${id}`] = true
    sessionStorage.totalLikes = JSON.stringify((JSON.parse(sessionStorage.totalLikes) + 1))

    setIsLiked(!isLiked)
    setQtdLikes((current: number | undefined) => current !== undefined ? current += valueToAddOrRemove : current)

    const result = await fetch(`https://blog-backend-arthur-candeia.vercel.app/likes/${post._id}/${incrementOrDecrement}`)
    console.log(await result.json())
  }

  return {isLiked, qtdLikes, functionUpdateLikesPost}
}
