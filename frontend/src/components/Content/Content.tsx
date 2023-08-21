import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import DataContext from "../../contexts/Data";
import useViewLinks from '../../hooks/useViewLinks';
import './Content.scss';

export default function Content() {
  const {posts, links} = useContext(DataContext)
  const viewPosts = posts.slice(0, 3)
  const {viewLinks, setViewLinks} = useViewLinks(links)
  const linksRef = useRef<HTMLDivElement>(null)
  const buttonLinksRef = useRef<HTMLButtonElement>(null)

  function moreVideos() {
    setViewLinks(links.reverse())
    if (linksRef.current && buttonLinksRef.current) {
      linksRef.current.classList.add('linksBoxMoreVideos')
      buttonLinksRef.current.style.display = 'none'
    }
  }

  return(
    <section id='blogMain'>
      {viewPosts.map((element, index) => (
        <div key={index} className={`blogPost postNum${index + 1}`}>
          <img src={`data:image/png;charset=utf-8;base64, ${element.src}`} alt={element.title} />
          <span>
            <h1>{element.title}</h1>
            <p className='date'>{element.date}</p>
          </span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius corrupti, quisquam assumenda doloribus commodi consequatur soluta sed, aspernatur error nemo asperiores. Laboriosam totam corporis nulla eum ipsam fugiat, obcaecati assumenda nemo vitae sed, inventore harum. Obcaecati explicabo, porro in quaerat aliquid accusantium voluptatum quidem fugiat eveniet illo sed possimus quos fuga aliquam quibusdam, optio ipsam! Qui consequatur omnis ipsam quam eaque corrupti neque, esse, nobis error eveniet doloribus, ex cum aspernatur distinctio nam asperiores at velit ducimus ea tenetur debitis. Eos nulla tenetur deserunt, perspiciatis omnis minus atque adipisci, iste ab ducimus vitae quo mollitia consequuntur autem animi repudiandae dolorem cupiditate modi, blanditiis corporis excepturi esse. Optio corporis modi dolore, tenetur, odit quod perspiciatis suscipit quibusdam sunt, incidunt perferendis numquam.</p>
          <Link to={`/posts/${index}`} className='blogLinkToPost'>Ver Publicação</Link>
        </div>
      )
      )}

      <div className='linksBox' ref={linksRef}>
        <h2>Vídeos Recomendados</h2>
      {viewLinks.map((element, index) => (
        <div key={index} className='links'>
          <a href={element.url} target='_blank' rel='external'>{element.title}</a>
        </div>
      ))}
        <button className='moreVideos' ref={buttonLinksRef} onClick={() => moreVideos()}>More Videos</button>
      </div>

      <div className='infos'>
        <img src="./author.jpg" alt="Author" />
        <p className='infoName'>Arthur Candeia</p>
        <div className="infoLinks">
          <a href="https://www.linkedin.com/in/arthur-candeia-heher-56b836248/" target='_blank' rel='external'>LinkedIn</a>
          <a href="https://portfolio-arthur-candeia.vercel.app/" target='_blank' rel='external'>Portfolio</a>
        </div>
      </div>
      <Link to={'/posts'} className='allPosts'>View All Posts</Link>
    </section>
  )
}