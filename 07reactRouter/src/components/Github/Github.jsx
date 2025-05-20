import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://github.com/gautam15072003/chai-aur-react')
      .then((Response)=>Response.json())
      .then(data=>console.log(data)
      )
      setData(data)
    }, [])
    
  return (
    <div className='bg-gray-600 text-center text-3xl p-4  m-5 text-yellow-400 '>
        Github followers : {data.followers}
        <img src="https://images.pexels.com/photos/32117654/pexels-photo-32117654/free-photo-of-rustic-yellow-scooter-by-riverside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="git-picture" width ={300} />
        </div>
  )
}

export default Github