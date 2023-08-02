import { useState } from "react"
import { handleSubmit } from "./api/newPost"
import { handleUpload } from "./handleUpload"
import './styles/style.scss'

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [links, setLink] = useState('')

  return (
    <>
      <h1>ADMIN BLOG TUDEV</h1>
      <form onSubmit={(ev) => handleSubmit({ev, user, password, title, content, links})} method="POST" encType="multipart/form-data" name="form" autoComplete="off">
        <input type="text" name="user" id="user" value={user} onChange={(ev) => setUser(ev.target.value)}
        placeholder="Usuário"/>
        <input type="password" name="password" id="password" value={password} onChange={(ev) => setPassword(ev.target.value)}
        placeholder="Senha"/>
        <input type="text" name="title" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)}
        placeholder="Título"/>
        <textarea name="content" id="content" cols={30} rows={10} value={content} onChange={(ev) => setContent(ev.target.value)}
        placeholder="Conteúdo"></textarea>
        <input type="text" name="link" id="link" value={links} onChange={(ev) => setLink(ev.target.value)}
        placeholder="Links"/>
        <input type="file" name="file" id="file" 
        placeholder="Banner" accept="image/jpeg, image/png, image/gif" onChange={handleUpload}/>
        <label htmlFor="file" id="file-label">Upload Image</label>
        <input type="submit" value="ENVIAR" />
      </form>
    </>
  )
}

export default App
