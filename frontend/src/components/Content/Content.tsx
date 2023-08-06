import { useContext } from 'react';
import DataContext from "../../contexts/Data";
import './Content.scss';

export default function Content() {
  const {posts} = useContext(DataContext)
  
  return(
    <>
      {posts.map((element, index) => (
        <div key={index} className='post'>
          <h1>{element.title}</h1>
          <img src={`data:image/png;charset=utf-8;base64, ${element.src}`} alt={element.title} />
          <p>{element.content}</p>
        </div>
      )
      )}
    </>
  )
}