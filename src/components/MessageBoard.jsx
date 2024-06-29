import { useState } from 'react';

function MessageBoard() { 
  const [message,setMessage] = useState(['Hello all ! This is first message.','Hello all ! This is second message.','Hello all ! This is third message.']);  // state ก็บข้อความทั้งหมด
  const [newMessage,setNewMessage] = useState(''); //state สำหรับเก็บข้อความที่ป้านผ่าน input


  const handleAddMessage = (index) => { //add 
    index.preventDefault(); //ป้องกัน refresh web/show data url
    setMessage([...message,newMessage]); //add newMessage in message
    setNewMessage(''); //clear input
  }

  const handleRemoveMessage = (index) => { //remove 
    const newMessages = [...message]
    newMessages.splice(index,1) //ลบข้อความตำแหน่ง index ออก
    setMessage(newMessages)
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleAddMessage}>Submit</button>
      </div>
      <div className="board">{message.map((item, index) => 
      (
        <div className="message" key={index}>
          <h1>{item}</h1>
          <button className="delete-button" onClick={() => handleRemoveMessage(index)}>x</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default MessageBoard;
