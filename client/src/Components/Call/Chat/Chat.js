import React, { useState, useEffect} from "react";
import queryString from "query-string";
import io from "socket.io-client";


import './Chat.css';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import VideoChat from "./VideoChat";


let socket;


const Chat = ({location})=> {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3000'

    


   useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    

    socket.emit('join', { name: name, room: room }, () => {

    });

    return () => {
        socket.emit('disconnect');
        socket.off();
    }
}, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on ('message', (message) => {
            setMessages([...messages, message]);
    
        })
    }, [messages]);
    
    const sendMessage = (event) => {
        event.preventDefault();
    
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    console.log(message, messages);


    return (
        <div className="outerContainer">
            <VideoChat room = {room} name = { name }/>
        <div className="container">
            <InfoBar room = {room}/>
            <Messages messages = {messages} name = {name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
        </div>
      </div>
    )
}


export default Chat

