import React, { useState } from "react"

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const formData  = new FormData();
    formData.append('user', user)
    formData.append('password', password)
    formData.append('title', title)
    formData.append('content', content)
    formData.append('file', document.forms[0]['file'].files[0])
    
    const result = await fetch('https://blog-backend-arthur-candeia.vercel.app/newpost', {method: 'POST',
  body: formData})
    const data = await result.json()
    console.log(data)
  }

  return (
    <>
      <h1>OLÁ</h1>
      <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" name="form">
        <input type="text" name="user" id="user" value={user} onChange={(ev) => setUser(ev.target.value)}/>
        <input type="password" name="password" id="password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
        <input type="text" name="title" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
        <textarea name="content" id="content" cols={30} rows={10} value={content} onChange={(ev) => setContent(ev.target.value)}></textarea>
        <input type="file" name="file" id="file" />
        <input type="submit" value="ENVIAR" />
      </form>
    </>
  )
}

export default App
