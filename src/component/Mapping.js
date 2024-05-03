import React from 'react'

export default function Mapping() {
    let arrayNum = [1,2,3,4,5,6];
    let updatedArray = [];
    

    const handleDoubling = (event)=>{
        arrayNum.map((item)=>{
            updatedArray.push(item*item);
        });
        console.log(updatedArray);

    }


  return (
    <>
        <input type="text" id='doubleTheNum'/>
        <button onClick={handleDoubling}>Submit data</button>
    </>
)
}
