import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
 
  const [trendingMovies, setTrendingMovies] = useState([])
  const [loading, setLoading] = useState(false)
  
  async function getTrending(){
    setLoading(true)
    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=4bf90efb346283942a052aab5be9185c`)
    setTrendingMovies(data.results)    
    setLoading(false)
  }
  
  ///componentdid mount
  useEffect(()=>{
    getTrending(); 
    //call api
    

  },[])

  return ( 
    <>
    <div className="row"> 
      {loading? <h1>Loading ........... <i className='fas fa-spinner fa-spin'></i></h1>:trendingMovies.map((moive ,index)=> <div key={index} className='col-xl-2'>
       <img className='w-100' src={'https://image.tmdb.org/t/p/w500/'+moive.poster_path} alt="" />
        <h2 className='h6'>{moive.title}</h2>
        <h3 className='h6'> {moive.media_type} </h3>
        
      </div>)}
      {}
    </div>
    </>
  )
}
