import React, { useEffect, useState } from 'react'
import './App.css'
import Tmdb from './Tmdb'
import Header from './components/Header'
import Banner from './components/Banner'
import Items from './components/Items'
import Footer from './components/Footer'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [bannerData, setBannerData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  const loader = require('./assets/loader.gif')

  useEffect(() => {
    const loadAll = async () => {
      /* get movies list */
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      /* get banner */
      let originals = list.filter(i => i.slug === 'originals')
      let random = Math.floor(Math.random() * (originals[0].items.results.length -1))
      random = originals[0].items.results[random]
      let data = await Tmdb.getBannerInfo(random.id, 'tv')
      setBannerData(data)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10)
        setBlackHeader(true)
      else
        setBlackHeader(false)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">

      <Header black={blackHeader} />

      {bannerData &&
        <Banner item={bannerData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <Items key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
      <div className="loading">
        <img src={loader.default} alt="loader" />
      </div>
      }
    </div>
  )

}