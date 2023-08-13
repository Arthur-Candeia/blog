import { useState } from "react";

export default function useViewLinks(links: [{title: string, url: string}]) {
  const [viewLinks, setViewLinks] = useState(window.innerWidth <= 800 ? links.slice(-3) : links.slice(-5))

  window.addEventListener('resize', () => {
    setViewLinks(window.innerWidth <= 800 ? links.slice(-3) : links.slice(-5))
  })

  return {viewLinks}
}