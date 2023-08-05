import { useContext } from 'react';
import DataContext from "../../contexts/Data"

export default function Content() {
  const {posts} = useContext(DataContext)
  
  return(
    <>
      {posts.map((element, index) => (
        <li key={index}>{element.title}</li>
      )
      )}
    </>
  )
}