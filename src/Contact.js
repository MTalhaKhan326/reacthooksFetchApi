import React, { useState } from 'react'

const Contact = () => {
    const [val,setVal]=  useState('Talha')
    const test = (e)=>{
     console.warn("test function", e.target.value)
     setVal(e.target.value)
    }
  return (
    <div><h1>
        Contact Us :
        </h1>
        <input type='text' value={val} onChange={test}/>
        <button onClick={()=>{alert(val)}}>
          <h4>  Click me :.. </h4>
        </button>
        </div>
  )
}

export default Contact