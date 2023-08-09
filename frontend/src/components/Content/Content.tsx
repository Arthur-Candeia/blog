import { useContext } from 'react';
import DataContext from "../../contexts/Data";
import { Link } from 'react-router-dom';
import './Content.scss';

export default function Content() {
  const {posts, links} = useContext(DataContext)
  console.log(links)
  const viewPosts = posts.slice(0, 3)

  return(
    <section id='blogMain'>
      {viewPosts.map((element, index) => (
        <div key={index} className={`blogPost postNum${index + 1}`}>
          <img src={`data:image/png;charset=utf-8;base64, ${element.src}`} alt={element.title} />
          <h1>{element.title}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius corrupti, quisquam assumenda doloribus commodi consequatur soluta sed, aspernatur error nemo asperiores. Laboriosam totam corporis nulla eum ipsam fugiat, obcaecati assumenda nemo vitae sed, inventore harum. Obcaecati explicabo, porro in quaerat aliquid accusantium voluptatum quidem fugiat eveniet illo sed possimus quos fuga aliquam quibusdam, optio ipsam! Qui consequatur omnis ipsam quam eaque corrupti neque, esse, nobis error eveniet doloribus, ex cum aspernatur distinctio nam asperiores at velit ducimus ea tenetur debitis. Eos nulla tenetur deserunt, perspiciatis omnis minus atque adipisci, iste ab ducimus vitae quo mollitia consequuntur autem animi repudiandae dolorem cupiditate modi, blanditiis corporis excepturi esse. Optio corporis modi dolore, tenetur, odit quod perspiciatis suscipit quibusdam sunt, incidunt perferendis numquam.</p>
        </div>
      )
      )}
      {links.map((element, index) => (
        <div key={index} className='links'>
          <p>{element.title}</p>
          <p>{element.url} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores voluptatem, et harum autem incidunt officia tenetur magni minus distinctio. Ullam cum qui modi aperiam asperiores nisi ipsum amet suscipit fugit sed facere nihil quod fuga pariatur aut nostrum officia, vitae quo animi laborum. Asperiores, error! Accusamus corporis ducimus nulla facere, nam maiores cum debitis esse! Laborum similique saepe accusantium molestias?</p>
        </div>
      ))}
      <Link to={'/posts'} className='allPosts'>AAAAAAA</Link>
    </section>
  )
}