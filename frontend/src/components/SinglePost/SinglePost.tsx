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
      <p className="singlePostContent">{post.content} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta esse quia optio nesciunt maiores atque dignissimos adipisci impedit molestiae enim temporibus libero sed, ea recusandae consectetur illum soluta magnam vero velit aspernatur? Alias reiciendis dolores eaque magni culpa vero nam eius, consequatur atque repellat officia sint omnis quae placeat ducimus iure quis excepturi quidem fugiat magnam architecto totam dolorum? Sed quasi quisquam perferendis debitis exercitationem, est ducimus similique non recusandae tempora fugiat nesciunt quas autem voluptatibus suscipit mollitia labore voluptatem corrupti voluptates iure iusto laudantium delectus soluta distinctio. Architecto, dolor. Tempora itaque eligendi est voluptatem minus voluptas earum necessitatibus ipsa dicta quod eos molestias ut doloremque enim blanditiis, porro praesentium iure quis. Minus nisi, ducimus assumenda ea adipisci, voluptates iusto dolorum animi provident quae sed, a nemo atque fugit laboriosam corrupti ab vel id exercitationem consequatur beatae. Nobis enim, animi, optio cum suscipit beatae, nemo vero perferendis molestias consectetur totam? lore</p>
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