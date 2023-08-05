import { useContext } from 'react';
import DataContext from "../../contexts/Data"

export default function Content() {
  const {posts, links} = useContext(DataContext)
  console.log(links)
  
  return(
    <>
      {posts.map((element, index) => (
        <li key={index}>{element.title}</li>
      )
      )}
    </>
  )
}