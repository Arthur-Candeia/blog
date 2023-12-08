import { useContext } from 'react';
import { useParams } from "react-router-dom"
import { useUpdateLikesPost } from '../../hooks/useUpdateLikesPost';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from "../../contexts/Data";
import './SinglePost.scss';

export default function SinglePost() {
  const {posts} = useContext(DataContext)
  const {id} = useParams<string>()
  const post = posts[Number(id)]
  const {isLiked, qtdLikes, functionUpdateLikesPost} = useUpdateLikesPost(post, id)

  return (
    <section id="singlePost">
      <img src={`data:image/png;charset=utf-8;base64, ${post.src}`} alt={post.src} className='singlePostImg'/>
      <aside className="singlePostInfos">
        <div>
          <h1 className="singlePostTitle">{post.title}</h1>
          <p className='singlePostDate'>{post.date}</p>
        </div>
        <div className='singlePostLikes'>
          <button onClick={functionUpdateLikesPost}>{isLiked ? 'CURTIDO' : 'CURTIR ❤️'}</button>
          <p>{qtdLikes}</p>
        </div>
      </aside>
      <p className="singlePostContent">{post.content}</p>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  )
}