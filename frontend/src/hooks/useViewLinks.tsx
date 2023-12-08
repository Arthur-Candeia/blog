import { useState } from "react";

export default function useViewLinks(links: [{title: string, url: string}]) {
  const [viewLinks, setViewLinks] = useState(window.innerWidth <= 800 ? links.slice(-3).reverse() : links.slice(-5).reverse())

  return {viewLinks, setViewLinks}
}