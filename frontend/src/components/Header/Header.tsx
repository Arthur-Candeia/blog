import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { loaderAllInfos } from "../../loaders/loaders";
import useAnimateLogo from '../../hooks/useAnimateLogo';
import DataContext from '../../contexts/Data';
import Shield from "../Shield/Shield";
import DataTypes from '../../interface/DataTypes';
import './Header.scss';

export default function Header() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 2}], links: [{title: '', url: ''}]})
  const animateLogo = useAnimateLogo()

  useEffect(()=> {
    setIsLoading(true)
    loaderAllInfos().then((result) => 
    {
      setData(result)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {isLoading ? (<Shield />) : (
        <DataContext.Provider value={data}>
          <header className='fixedHeader'>
            <Link onMouseMove={animateLogo} onClick={animateLogo} id='logo' to="/">
              {'TUDEV'.split('').map((element, index) => <span key={index}>{element}</span>)}
            </Link>
            <nav>
              <Link to='/posts'>Posts</Link>
              <a href='https://github.com/Arthur-Candeia/blog' target='_blank' rel='external'>Repository</a>
            </nav>
          </header>
          <Outlet></Outlet>
        </DataContext.Provider>
      )}
    </>
  )
}