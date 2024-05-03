import React, { useState } from 'react'

export default function Usecontext() {

    const [count, setCount] = useState(10);

    const increment = (event)=>{

        setCount(item => (item < 1? 0 :  item-1));
    }
  return (
<div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div> 
    
)
}
