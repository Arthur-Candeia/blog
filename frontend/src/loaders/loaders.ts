export async function loaderAllInfos() {
  const result = await fetch('https://blog-backend-arthur-candeia.vercel.app/')
  const data = await result.json()

  if (!sessionStorage.totalLikes) sessionStorage.totalLikes = 0 
  
  return {posts: data.posts, links: data.links}
}