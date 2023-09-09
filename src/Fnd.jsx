import React from 'react'

export default function Fnd({fnd}) {
    const {name, email} = fnd
  
  return (
    <div style={{border:'4px solid red' , textAlign:'center', background:'white', color:"black" , margin:"100px"}}>
      <h1>My fnd : {name}</h1>
      <h2>My Fnd Email : {email}</h2>
    </div>
  )
}
