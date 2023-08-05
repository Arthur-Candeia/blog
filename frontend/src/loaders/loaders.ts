export async function loaderAllInfos() {
  if (localStorage.posts) {
    return JSON.parse(localStorage.posts)
  }
  else {
    const header = new Headers({
      'Content-Type': 'application/json'
    })
    const body = JSON.stringify({
      user: `${import.meta.env.VITE_ENTRADA}`,
      password: `${import.meta.env.VITE_INICIAR}`
    })

    const result = await fetch('https://blog-backend-arthur-candeia.vercel.app/', {method: 'POST', headers: header, body})
    const data = await result.json()
    //localStorage.posts = JSON.stringify(data)
    return data;
  }
}