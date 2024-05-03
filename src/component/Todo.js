import React, { useState } from "react";

export default function Todo() {
  const divStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    border: "1px solid black",
    height: "500px",
    width: "800px",
    borderRadius: "20px",
    alignItems: "center",
    // backgroundColor : "#808080"
  };

  const dataStyle = {
    zIndex: "2",
    backgroundColor: "white",
  };
  const style = {
    width: "100%",
    borderRadius: "15px",
    outline: "none",
    height: "60px",
    padding: "10px",
  };
  const dataGrouped = {
    width: "90%",
    outline: "none",
    height: "60px",
    borderRadius: "20px",
    padding: "10px",
    top: "-200px",
    fontSize: "28px",
    position: "relative",
    zIndex: "9",
    display: "inline-flex",
    alignItems: "center",
  };

  const storedData = {
    position: "absolute",
    height: "300px",
    borderRadius: "10px",
    width: "70%",
    backgroundColor: "white",
    display: "block",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    overflow: "auto",
  };
  const buttonStyle = {
    height: "160%",
    borderRadius: "10px",
    width: "200px",
    marginLeft: "10px",
    fontSize: "18px",
    outline: "none",
    fontWeight: "bolder",
  };

  const listedItem ={
    position : "relative",
    border:"1px solid black ",
    display : "inline-flex",
    width : "100%",
    marginTop : "5px",
    marginBottom : "5px",
    justifyContent : "space-between",
    alignItems:"center",
    textAlign:"center",
    backgroundColor:"grey",
    color:"white"

  }

  const [todo, setTodo] = useState("");
  const [arrayTodo, setArrayTodo] = useState([]);


  const handleSubmission = (event) => {

    if (todo.trim() !== "") {
        event.preventDefault();

      setArrayTodo([...arrayTodo, { task: todo }]);
      setTodo("");
    } else {
      console.log("Write anything at least");
    }
  };
              
  
//   console.log(finalArray);

  const handleInput = (event) => {
    const enteredData = event.target.value;
    setTodo(enteredData);
  };

  const handleEditing = (indexNo)=>{
    console.log("It is called");
    console.log("handleEditing called with indexNo:", indexNo);

    const newData = prompt("Enter you new task");
    console.log("New data:", newData);

    setArrayTodo(arrayTodo.map((item,index)=>{
        if(indexNo === index+1){
            return {...item, task : newData};
        }
        return item;
    }))
}





  const handleDeletion = (event)=>{
    const valueItem = event.target.value;
    removeData(valueItem);
}

const removeData = (valueItem)=>{
    const updatedTodo = arrayTodo.filter(value=> value.task !== valueItem);
    setArrayTodo(updatedTodo);
}
  return (
    <>
      <h1>Todo App</h1>
      <div className="container" style={divStyle}>
        <div className="grouped" style={dataGrouped}>
          <input
            type="text"
            id="todoData"
            required
            value={todo}
            style={style}
            onChange={handleInput}
          />
          <button
            className="submit"
            style={buttonStyle}
            onClick={handleSubmission}
          >
            Submit Task
          </button>
        </div>

        <div className="storeData" style={storedData}>
          {
            arrayTodo.length>0?(
                 arrayTodo.map((item,index)=>(
                     <div key={index}  style={listedItem}>
                        <span>Task No :  {index+1}</span>
                        <p>{item.task}</p>
                        <button id={index+1} onClick={()=>handleEditing(index+1)} >Edit data</button>
                        <button  value={item.task} onClick={handleDeletion} name="todo">MarkComplete</button>
                    </div>
                 ))
            ):(
                <span>Data should  be inserted..........</span>
            )
          }
        </div>
      </div>
    </>
  );
}


