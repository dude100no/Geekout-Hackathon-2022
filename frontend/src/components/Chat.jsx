import { InputGroup, FormControl, Button } from "react-bootstrap";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import socketIOClient from 'socket.io-client';
import '../styles/chat.component.css';
import { get_user_info, user_msg_view } from "../utils";
import { useAuth } from "../auth";

const Chat = ({ recipientId }) => {
  
  const auth = useAuth();
  const [recipient, setRecipient] = useState({first_name: ''});
  const [messages, setMessages] = useState([]);
  
  const [value, setValue] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    if (recipientId === null) return;
    (async () => {
      setRecipient((await get_user_info(recipientId))[0]);
    })();
    (async () => {
      setMessages((await user_msg_view(recipientId)).filter(({sender, recipient}) => (((sender === auth.user.userid) && (recipient === recipientId)) || ((recipient === auth.user.userid) && (sender === recipientId)))));
    })();
  }, [recipientId]);

  useEffect(() => {
    console.info('ds', recipient, recipientId);
  }, [recipient]);

  useEffect(() => {
    socketRef.current = socketIOClient("https://backend-production-2f94.up.railway.app/chat", {
      query: {
        sender_id: auth.user.userid,
        recipient_id: recipientId
      }
    });
    
    // // Listens for incoming messages
    socketRef.current.on("update_message", (message) => {
      console.log(message);
      // console.log(incomingMessage);
      setMessages([message, ...messages]);
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [recipientId, messages]);


  const sendMessage = (e) => {
    e.preventDefault();
    console.log(value);
    socketRef.current.emit("message", {
      message: value,
      sender: auth.user.userid,
      recipient: recipientId
    });
    setValue('');
  };

  if (recipientId === null) {
    return (
      <div id="chat" className="nothing-selected container col-8 p-3 m-3">
        <p>No chat selected</p>
      </div>
    );
  }
  
  return (
    <div id="chat" className="container col-8 p-3 m-3">
      <div id="chat-header" className="container p-0">
        Messaging { recipient.first_name }
      </div>
      <div id="chat-view" className="container p-1">
        { messages.map(message => <Message messageData={message} />) }
      </div>
      <div id="chat-input" className="row container p-0">
        <form onSubmit={sendMessage}>
          <InputGroup className="p-0">
            <FormControl
              placeholder="Message"
              aria-label="Message"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <Button variant="secondary" onClick={sendMessage}>
              Send
            </Button>
          </InputGroup>
        </form>
      </div>
    </div>
  );
};

export default Chat;
