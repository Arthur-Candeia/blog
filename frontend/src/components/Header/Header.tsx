import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import { loaderAllInfos } from "../../loaders/loaders";
import DataContext from '../../contexts/Data';
import Shield from "../Shield/Shield";
import DataTypes from '../../interface/DataTypes';


export default function Header() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<DataTypes>({posts: [{title: '', content: '', src: '', date: '', likes: 2}], links: []})

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
          <header>OLÁ</header>
          <Outlet></Outlet>
        </DataContext.Provider>
      )}
    </>
  )
}