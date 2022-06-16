import { InputGroup, FormControl, Button } from "react-bootstrap";
import Message from "../components/Message";

const Chat = () => {
  
  const s = [{message: 'asdasd', author: 'asdasd', isIncoming: true},
  {message: 'asdasd', author: 'asdasd', isIncoming: false},
  {message: 'asdasd', author: 'asdasd', isIncoming: true}];
  
  return (
    <div id="chat" className="container col-8 p-3 m-3">
      <div id="chat-view" className="container p-1">
        {s.map(message => <Message {...message} />)}
      </div>
      <div id="chat-input" className="row container p-0">
        <InputGroup className="p-0">
          <FormControl
            placeholder="Message"
            aria-label="Message"
          />
          <Button variant="secondary">
            Send
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Chat;