import { useContext } from 'react';
import { useParams } from "react-router-dom"
import DataContext from "../../contexts/Data";

export default function SinglePost() {
  const {posts} = useContext(DataContext)
  const {id} = useParams<string>()
  const post = posts[Number(id)]

  return (
    <section id="singlePost">
      <img src={`data:image/png;charset=utf-8;base64, ${post.src}`} alt="" />
    </section>
  )
}