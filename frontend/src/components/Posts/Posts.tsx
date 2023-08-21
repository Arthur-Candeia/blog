import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from "../../contexts/Data";
import './Posts.scss';

export default function Posts() {
  const {posts} = useContext(DataContext)

  return (
    <section id='PostsMain'>
      {posts.map((element, index) => (
        <div key={index} className={`postMainElement`}>
          <img src={`data:image/png;charset=utf-8;base64, ${element.src}`} alt={element.title} />
          <span>
            <h1>{element.title}</h1>
            <p className="date">{element.date}</p>
          </span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius corrupti, quisquam assumenda doloribus commodi consequatur soluta sed, aspernatur error nemo asperiores. Laboriosam totam corporis nulla eum ipsam fugiat, obcaecati assumenda nemo vitae sed, inventore harum. Obcaecati explicabo, porro in quaerat aliquid accusantium voluptatum quidem fugiat eveniet illo sed possimus quos fuga aliquam quibusdam, optio ipsam! Qui consequatur omnis ipsam quam eaque corrupti neque, esse, nobis error eveniet doloribus, ex cum aspernatur distinctio nam asperiores at velit ducimus ea tenetur debitis. Eos nulla tenetur deserunt, perspiciatis omnis minus atque adipisci, iste ab ducimus vitae quo mollitia consequuntur autem animi repudiandae dolorem cupiditate modi, blanditiis corporis excepturi esse. Optio corporis modi dolore, tenetur, odit quod perspiciatis suscipit quibusdam sunt, incidunt perferendis numquam.</p>
          <Link to={`/posts/${index}`} className='linkToPost'>Ver Publicação</Link>
        </div>
      )
      )}
    </section>
  )
}