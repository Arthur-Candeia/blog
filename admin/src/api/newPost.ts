import React from 'react'

interface PropsSubmit {
  ev: React.FormEvent,
  user: string,
  password: string,
  title: string,
  content: string,
  linkTitle: string,
  linkUrl: string
}

export async function handleSubmit({ev, user, password, title, content, linkTitle, linkUrl}:PropsSubmit) {
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

  const headers = new Headers({'Content-Type': 'application/json'})
  const body = JSON.stringify({user, password, title: linkTitle, url: linkUrl})
  const result2 = await fetch('https://blog-backend-arthur-candeia.vercel.app/links', {method: 'POST', headers, body})
  const data2 = await result2.json()

  console.log(data)
  console.log(data2)

  // eslint-disable-next-line no-prototype-builtins
  if (await data.hasOwnProperty('msg') && await data2.hasOwnProperty('msg')) {
    document.body.style.backgroundColor = '#ff0043'
  }
  else {
    document.body.style.backgroundColor = '#00ff88'
  }
}