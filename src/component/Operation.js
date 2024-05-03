import React,{useState} from 'react'

export default function Operation() {

    const [count,setCount] = useState("");
    const increasevalue = (event)=>{
        setCount(count+1);
    }
    const decreasevalue = (event)=>{
        if(count!==0 && count!==null){
            setCount(count-1);
        }else{
            setCount(0);
        }
    }
  return (
    <>
        <div className="operation-container">
            <input type="text" name='valuePlacer' id='valueField' readOnly value={count}/>
            <div className="button-container">
                <button id='decreaseButton' onClick={decreasevalue}>- </button>
                <button id='increaseButton' onClick={increasevalue} >+</button>

            </div>
        </div>
    </>
)
}
