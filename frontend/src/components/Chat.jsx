import { InputGroup, FormControl, Button } from "react-bootstrap";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import socketIOClient from 'socket.io-client';
import '../styles/chat.component.css';

const Chat = () => {
  
  // const [value, setValue] = useState('');

  // const socketRef = useRef();

  useEffect(() => {
    
    // Creates a WebSocket connection
    // socketRef.current = socketIOClient("ws://localhost:4000");
    // socketRef.current = socketIOClient("https://backend-production-2f94.up.railway.app/", {
    //   query: {
    //     sender_id: 2,
    //     recipient_id: 3
    //   }
    // });
    
    // // Listens for incoming messages
    // socketRef.current.on("update_message", (message) => {
    //   console.log(message);
    //   // const incomingMessage = {
    //     // ...message,
    //     // ownedByCurrentUser: message.senderId === socketRef.current.id,
    //   // };
    //   // console.log(incomingMessage);
    //   // setMessages((messages) => [...messages, incomingMessage]);
    // });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      // socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // console.log(value);
    // socketRef.current.emit("message", {
    //   message: value,
    //   senderId: 2,
    //   receiverId: 3
    // });
  };
  
  return (
    <div id="chat" className="container col-8 p-3 m-3">
      <div id="chat-view" className="container p-1">
        
      </div>
      <div id="chat-input" className="row container p-0">
        <InputGroup className="p-0">
          <FormControl
            placeholder="Message"
            aria-label="Message"
            // value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button variant="secondary" onClick={sendMessage}>
            Send
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Chat;
