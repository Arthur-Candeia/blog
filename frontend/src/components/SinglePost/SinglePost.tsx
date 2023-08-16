import { useContext } from 'react';
import { useParams } from "react-router-dom"
import DataContext from "../../contexts/Data";
import './SinglePost.scss';

export default function SinglePost() {
  const {posts} = useContext(DataContext)
  const {id} = useParams<string>()
  const post = posts[Number(id)]

  return (
    <section id="singlePost">
      <img src={`data:image/png;charset=utf-8;base64, ${post.src}`} alt={post.src} className='singlePostImg'/>
      <aside className="singlePostInfos">
        <div>
          <h1 className="singlePostTitle">{post.title}</h1>
          <p className='singlePostDate'>{post.date}</p>
        </div>
        <div className='singlePostLikes'>
          <button>CURTIR ❤️</button>
          <p>0</p>
        </div>
      </aside>
    </section>
  )
}