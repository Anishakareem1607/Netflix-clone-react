import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,fetchurl}) {
  console.log("title");
  console.log(title);
  console.log(fetchurl);
  const img_base_url="https://image.tmdb.org/t/p/original/"
  const [allMovies,setAllMovies]=useState()
  const fetchData=async()=>{
    const response=await instance.get(fetchurl)
    console.log("api result");
    console.log(response);
    setAllMovies(response.data.results)

    
    
  }

  useEffect(()=>{
    fetchData()
  },[])
  console.log("allmovies",allMovies);
  
  
  
  
  return (
    <>
    <div className='row mt-3'>
      <h3>{title}</h3>
      <div className='movie_row'>{
        allMovies?.map(item=>(
          <img className='movies'
          src={`${img_base_url}${item?.poster_path}`} alt=""  />
        ))
        
        }
      

      </div>

    </div>
    </>
  )
}

export default Row