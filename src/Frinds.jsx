import React, { useEffect, useState } from 'react'
import Fnd from './Fnd'

export default function Frinds() {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
   
  return (
    <div>
        <h1>My All Fnd Total : {user.length}</h1>
        {user.map(e=><Fnd key={e.id} fnd={e}/>)}
    </div>
  )
}
