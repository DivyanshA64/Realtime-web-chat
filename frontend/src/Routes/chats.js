import React, { useEffect ,useContext} from 'react'
import { useState } from 'react'
import { SocketContext } from './socketcontext';
import { useLocation } from 'react-router-dom';

 function Chats(){
    const [currmessage , setcurrmessage] = useState("");
    const socket = useContext(SocketContext);
    const location = useLocation();
    const rooms = location.state.rooms;
    const username = location.state.username;

   const sendmessage = async ()=>{
      if(currmessage !== ""){
         const messagedata = {
               room: rooms,
               author: username,
               message: currmessage,
               time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
         }
            await socket.emit("sendmessage", messagedata);
      }
   }

   useEffect(()=>{
      socket.on("reciever",(data)=>{
         console.log(data);
      })
      return ()=>{
         socket.off("reciever");
      }
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