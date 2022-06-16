
import { Modal } from 'react-bootstrap';
import Logo from '../logo.svg';
import '../styles/queue-modal.component.css';

import socketIOClient from 'socket.io-client';
import { useAuth } from '../auth';
import { useRef, useEffect } from 'react';

const QueueModal = (props) => {
  const auth = useAuth();

  const socketRef = useRef();

  useEffect(() => {
    
    // Creates a WebSocket connection
    // socketRef.current = socketIOClient("ws://localhost:4000");
    socketRef.current = socketIOClient("https://backend-production-2f94.up.railway.app/queue", {
      query: {
        user_id: auth.user.userid,
        user_type: auth.user.type
      }
    });
    
    // Listens for incoming messages
    socketRef.current.on("found_match", ({match_id}) => {
      console.log(match_id);
      props.onGetMatchId(match_id);
      // const incomingMessage = {
        // ...message,
        // ownedByCurrentUser: message.senderId === socketRef.current.id,
      // };
      // console.log(incomingMessage);
      // setMessages((messages) => [...messages, incomingMessage]);
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dismissible
    >
      <Modal.Header closeButton>
        <Modal.Title>Waiting...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Waiting for {props.type === 'Normal' ? 'a professional' : 'someone seeking help'}</h5>
        <img id="spinning-logo" src={Logo} />
      </Modal.Body>
    </Modal>
  );
};

export default QueueModal;