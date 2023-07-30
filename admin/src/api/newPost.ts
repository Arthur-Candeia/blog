import React from 'react'

interface PropsSubmit {
  ev: React.FormEvent,
  user: string,
  password: string,
  title: string,
  content: string
}

export async function handleSubmit({ev, user, password, title, content}:PropsSubmit) {
  ev.preventDefault()
  document.body.style.backgroundColor = '#444'
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

  // eslint-disable-next-line no-prototype-builtins
  if (await data.hasOwnProperty('msg')) {
    document.body.style.backgroundColor = '#ff0043'
  }
  else {
    document.body.style.backgroundColor = '#00ff88'
  }
}