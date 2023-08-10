import { useContext } from 'react';
import DataContext from "../../contexts/Data";
import { Link } from 'react-router-dom';
import './Content.scss';

export default function Content() {
  const {posts, links} = useContext(DataContext)
  const viewPosts = posts.slice(0, 3)
  const viewLinks = links.slice(0, 3)

  return(
    <section id='blogMain'>
      {viewPosts.map((element, index) => (
        <div key={index} className={`blogPost postNum${index + 1}`}>
          <img src={`data:image/png;charset=utf-8;base64, ${element.src}`} alt={element.title} />
          <h1>{element.title}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius corrupti, quisquam assumenda doloribus commodi consequatur soluta sed, aspernatur error nemo asperiores. Laboriosam totam corporis nulla eum ipsam fugiat, obcaecati assumenda nemo vitae sed, inventore harum. Obcaecati explicabo, porro in quaerat aliquid accusantium voluptatum quidem fugiat eveniet illo sed possimus quos fuga aliquam quibusdam, optio ipsam! Qui consequatur omnis ipsam quam eaque corrupti neque, esse, nobis error eveniet doloribus, ex cum aspernatur distinctio nam asperiores at velit ducimus ea tenetur debitis. Eos nulla tenetur deserunt, perspiciatis omnis minus atque adipisci, iste ab ducimus vitae quo mollitia consequuntur autem animi repudiandae dolorem cupiditate modi, blanditiis corporis excepturi esse. Optio corporis modi dolore, tenetur, odit quod perspiciatis suscipit quibusdam sunt, incidunt perferendis numquam.</p>
          <Link to={`/posts/${index}`}>Ver Publicação</Link>
        </div>
      )
      )}
      <div className='links'>
      {viewLinks.map((element, index) => (
        <div key={index}>
          <p>{element.title}</p>
          <p>{element.url} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatem, et harum autem incidunt off</p>
        </div>
      ))}
      </div>
      <div className='blogInfos'>
        INFOS
      </div>
      <Link to={'/posts'} className='allPosts'>View All Posts</Link>
    </section>
  )
}