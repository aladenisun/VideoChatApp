import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";


const CreateRoom = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

    return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <pre className="heading">JOIN A ROOM</pre>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Enter</button>
        </Link>
      </div>
    </div>

    )
}


export default CreateRoom;

