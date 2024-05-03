import React, { useState, useEffect } from "react";
import "../App.css";

export default function ChatReply() {
  const [user, setUser] = useState("");
  const [creater, setCreater] = useState("Betoksy");
  const [chat,setChat] = useState("");
  const [message, setMessage] = useState([]);
  const searchStyle = {
    position: "relative",
    width: "100%",
    textAlign: "center",
  };

  const searchBar = {
    width: "500px",
    height: "60px",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#f3f3f5",
    fontSize: "24px",
    outline: "none",
    border: "none",
  };
  const chatRoom = {
    position: "absolute",
    height: "700px",
    width: "1000px",
    top: "55%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "20px",
    backgroundColor: "#f3f3f5",
  };

  const headerBack = {
    backgroundColor : "transparent"
  }

  const userStyle = {
    position: "relative",
    backgroundColor: "transparent",
    top: "1%",
    left: "5%",
    fontSize: "20px",
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: "bolder",
  };

  const heading = {
    backgroundColor: "transparent",
  };

  const handleUser = (event) => {
    const newData = event.target.value;

    if (newData) {
      setUser(event.target.value);
    }
  };

  const handleMessage = (event)=>{
    setChat(event.target.value);
  }

  const handleSubmission = (event) => {
    if (chat !== "") {
      const newMessage = {
        name: creater,
        messages: chat
      };
      setChat("");
      setMessage([...message, newMessage]);
      
    }
  };

  return (
    <>
      <h1>Simple Real Time Chatting App</h1>

      <div className="searchBar" style={searchStyle}>
        <input
          type="text"
          id="searchUser"
          style={searchBar}
          placeholder="Enter user name"
          onBlur={handleUser}
        />
      </div>

      {
        user ? (
            <>
                 <div className="chatRoom" style={chatRoom}>
        <h3  style={heading}>{user}</h3>

  
      {message.map((value, index) => (
        <div key={index} className="header"  style={headerBack}>
          <span style={userStyle}>{value.user}</span>
          <div className={`userContainer ${value.name === creater ? "me" : "you"}`}>
            <span className="userMessage">{value.messages}</span>
          </div>
        </div>
      ))}
    
  



        

        <div className="messageInput">
          <input
            type="text"
           onChange={handleMessage}
           value={chat}
            placeholder="Enter your message"
          />
          <button onClick={handleSubmission}>Send</button>
        </div>
      </div>
            </>

        ):null
      }

     
    </>
  );
}
