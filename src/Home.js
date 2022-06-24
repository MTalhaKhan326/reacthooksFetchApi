import React, { useState } from 'react'

const Home = () => {
    const [user , updateuser]=useState([
        {name:'Babar', age:55},
        {name:'Talha', age:21},
        {name:'Abdullah', age:19},
        {name:'Saif', age:16},
        {name:'Umer', age:15}
    ])
  return (
    <div>
        <h1>Usrs Listing is here</h1>
        {
         user.length===3? <div>Yes this is right</div>:<div> no this is false</div>
        }
    </div>
  )
}

export default Home