import React from 'react'
import { useContext,useState } from 'react';
import { SocketContext } from './socketcontext';
import Chats from './chats';

function Home() {
    const socket = useContext(SocketContext);
    let flag = true;
    const [room , setroom] = useState("");
    const [Username , setUsername] = useState("");
    
  const joinroom = () =>{
      if(Username !== "" && room !== ""){
      socket.emit("joinroom",room);
      socket.on("validation",(data)=>{
      alert(`console says: ${data}`);
       flag = false;
      });

      }else{
        alert("Enter Valid Inputs");
      }
   }
  return (
    <div className="App-header">
       if(flag){
        <div>
        <h1>hello world</h1>
        <h3>JOIN A CHAT</h3>
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
        <button onClick ={joinroom}><h3>CreateRoom/Joinroom</h3></button>
        </div>
      }else{
        <div>
        <Chats room = {room} username = {Username}/>
        </div>
      }  

      </div>
  
)}

export default Home