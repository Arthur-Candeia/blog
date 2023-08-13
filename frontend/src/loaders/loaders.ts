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
  localStorage.posts = JSON.stringify(data)
  return data;
}