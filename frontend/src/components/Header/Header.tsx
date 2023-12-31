import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { loaderAllInfos } from "../../loaders/loaders";
import useAnimateLogo from '../../hooks/useAnimateLogo';
import switchTheme from './switchTheme';
import DataContext from '../../contexts/Data';
import Shield from "../Shield/Shield";
import DataTypes from '../../interfaces/DataTypes';
import './Header.scss';

export default function Header() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 0, _id: ''}], links: [{title: '', url: ''}]})
  const animateLogo = useAnimateLogo()

  useEffect(()=> {
    setIsLoading(true)
    localStorage.isDark ? switchTheme(true) : ''
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
              <label className="switch">
                <input type="checkbox" onChange={(ev) => switchTheme(ev.target.checked)} defaultChecked={localStorage.isDark ? true : false}/>
                <span className="slider round"></span>
              </label>
            </nav>
          </header>
          <Outlet></Outlet>
        </DataContext.Provider>
      )}
    </>
  )
}