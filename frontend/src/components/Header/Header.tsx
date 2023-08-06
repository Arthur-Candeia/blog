import { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import { loaderAllInfos } from "../../loaders/loaders";
import HookAnimateLogo from '../../hooks/HookAnimateLogo';
import DataContext from '../../contexts/Data';
import Shield from "../Shield/Shield";
import DataTypes from '../../interface/DataTypes';
import './Header.scss';

export default function Header() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 2}], links: []})
  const animateLogo = HookAnimateLogo()

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
            <span onMouseMove={() => animateLogo()} id='logo'>
              {'TUDEV'.split('').map((element, index) => <span key={index}>{element}</span>)}
            </span>
            <nav>
              <Link to='/posts'>Posts</Link>
              <Link to='/repository'>All Videos</Link>
            </nav>
          </header>
          <Outlet></Outlet>
        </DataContext.Provider>
      )}
    </>
  )
}