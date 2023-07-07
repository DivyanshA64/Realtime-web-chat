import React, { useEffect } from 'react'
import { useState } from 'react'
import { io } from 'socket.io-client';

 const socket = io.connect("http://localhost:5000");
 function Chats(room, username){
    const [currmessage , setcurrmessage] = useState("");
       
      const sendmessage = async ()=>{
         if(currmessage !== ""){
            const messagedata = {
                room: room,
                author: username,
                message: currmessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            }
             await socket.emit("sendmessage", messagedata);
         }
      }
    useEffect(()=>{
        socket.on("reciever",(data)=>{
           console.log("hello");
           console.log(data);
        })
     },[socket]);

  return(
    <div>
    <div className='chat-header'>This is chats page</div>
    <div className='chat-body'>This is chats page</div>
    <div className='chat-footer'>This is chats page</div>
    <input type = 'text'
    value={currmessage}
    placeholder='type to send message...'
    onChange={(event)=>{
        setcurrmessage(event.target.value);
    }}
    />
    <button onClick={sendmessage}>SEND MSG</button>
    </div>
  )
}

export default Chats