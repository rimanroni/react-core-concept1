import { useEffect, useState } from "react"
import Teram from "./components/Teram"
import User from "./components/User"
import Frinds from "./Frinds"

 
 function App() {
   
 let [count , setCound] = useState(0)
 const [user, setUser] = useState([])
 useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setUser(data))
  
 },[])
 
  return (

    <>
    <Frinds/>
    <h1>React core concept </h1>
    {user.map(e=><li key={e.id}>{e.name}</li>)}
    <h1>Data load : {user.length}</h1>
    <User/>
    <Teram/>
    <h1>My Count : {count}</h1>
         <button onClick={()=>{
          setCound(count+1)
         }}>  count ++ </button>
         <button onClick={()=>{
          setCound(count-1)
         }}>count --</button>
     </>
  )
}

export default App
