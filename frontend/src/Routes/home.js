import React from 'react'
import { useContext,useState } from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import {Route , Routes, BrowserRouter} from 'react-router-dom';
import { SocketContext } from './socketcontext';
import './home.css'

function Home() {
    const socket = useContext(SocketContext);
    const [room , setroom] = useState("");
    const [Username , setUsername] = useState("");
    const navigate = useNavigate();

  const joinroom = () =>{
      if(Username !== "" && room !== ""){
      socket.emit("joinroom",room);
      socket.on("validation",(data)=>{
      alert(`console says: ${data}`);
      const states = {
        rooms : room,
        username : Username,
      }
      navigate("/chats", {state: states});
      });
      }else{
        alert("Enter Valid Inputs");
      }
   }
  return (
    <div className="App-header">
        <div>
        <div className='header'>
        <h1>Create your private chat room</h1>
        </div>
        <div className='joinChatContainer'>
         <label htmlFor={'my-input'}> Enter roomid: </label>
         <input 
         type='text' 
         placeholder='Enter roomid...'
         onChange={(event)=>{
          setroom(event.target.value);
         }}
         />
         <label htmlFor={'my-input'}> Enter username: </label>
         <input type='text' 
         placeholder='john...' 
         onChange={(event) =>{
            setUsername(event.target.value);
         }}
         />
        <button onClick ={joinroom}>CreateRoom/Joinroom</button>
        </div>
        </div>

      </div>
  
)}

export default Home