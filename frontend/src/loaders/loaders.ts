import DataTypes from '../interfaces/DataTypes'
import PostTypes from '../interfaces/PostTypes'

export async function loaderAllInfos() {
  const header = new Headers({
    'Content-Type': 'application/json'
  })
  const body = JSON.stringify({
    user: `${import.meta.env.VITE_ENTRADA}`,
    password: `${import.meta.env.VITE_INICIAR}`
  })

  const result = await fetch('https://blog-backend-arthur-candeia.vercel.app/', {method: 'POST', headers: header, body, credentials: 'include'})
  const data = await result.json()

  //Feito para ban em caso de muitas requisições
  if (!sessionStorage.totalLikes) sessionStorage.totalLikes = 0 
  
  if (Object.prototype.hasOwnProperty.call(data, 'msg')) {
    return getDataFromLS()
  }
  
  saveDataInLS(data)
  return {posts: data.posts, links: data.links}
}

function saveDataInLS(data: DataTypes) {
  data.posts.reverse().forEach((element: PostTypes, index: number) => {
    localStorage[`title${index}`] = JSON.stringify(element.title)
    localStorage[`date${index}`] = JSON.stringify(element.date)
    localStorage[`content${index}`] = JSON.stringify(element.content)
    localStorage[`src${index}`] = JSON.stringify(element.src)
    localStorage[`likes${index}`] = JSON.stringify(element.likes)
    localStorage[`id${index}`] = JSON.stringify(element._id)
  })

  localStorage.qtdPosts = data.posts.length
  localStorage.links = JSON.stringify(data.links)
}

function getDataFromLS() {
  let posts: PostTypes[] = []

  for (let i = 0; i < +localStorage.qtdPosts; i++) {
    const title = JSON.parse(localStorage[`title${i}`])
    const date = JSON.parse(localStorage[`date${i}`])
    const content = JSON.parse(localStorage[`content${i}`])
    const src = JSON.parse(localStorage[`src${i}`])
    const likes = JSON.parse(localStorage[`likes${i}`])
    const _id = JSON.parse(localStorage[`id${i}`])

    posts = [...posts, {title, date, content, src, likes, _id}]
  }

  return {posts, links: JSON.parse(localStorage.links)}
}