import React, { useState } from 'react'



const Createuser = () => {
    
const [username,setUsername] = useState('')
const [age,setAge] = useState('')
const [address,setAddress] = useState('')

const makeUser=()=>{
    let Data ={username,age, address}
    console.warn('called',Data)
    
}
  return (
    <div>
        <h1>Make a new user</h1>
        <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} value={username} /> <br />
        <input type="text" name="age" onChange={(e)=>setAge(e.target.value)} value={age} /> <br />
        <input type="text" name="address" onChange={(e)=>setAddress(e.target.value)} value={address} /> <br />
        <button onClick={makeUser}>Create User</button>
    </div>
  )
}

export default Createuser