import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Banner.css'

function Banner({fetchurl}) {
  console.log(fetchurl)
  const img_base_url="https://image.tmdb.org/t/p/original/"
  const [movies,setmovies]=useState()
  const fetchdata= async()=>{
    const {data}=await instance.get(fetchurl)
    // console.log("api result")
    // console.log("result length");
    const res= data.results[Math.floor(data.results.length*Math.random())]
    
    // console.log(data.results[0]);
    // const res=data.results[0]
    // console.log("1");
    // console.log(res.backdrop_path);
    setmovies(res)
    
    
    
    // console.log(data)
    // setmovies(data.results[0])
  }
  useEffect(()=>{
    setInterval(()=>{
      fetchdata()

    },5000)
    fetchdata()
    
  },[])
  return (
    <>
      
      <div style={{backgroundImage:`url(${img_base_url}${movies?.backdrop_path})`, height:'100vh', width:"100%",backgroundSize:'cover'}}>
        <div className='banner_content'>
          <h2>{movies?.name}</h2>
          <button className='btn btn-danger border-radius:5px width:50%'>PLAY <i class="fa-solid fa-play fa-sm ms-2"></i></button>
          <button className='btn btn-outline-light ms-2'>MORE INFO <i class="fa-solid fa-caret-down fa-sm ms-2"></i></button>
          <p className='mt-3 text-light'>{movies?.overview.slice(0,200)}...</p>

        </div>
      </div>
    </>
  )
}

export default Banner