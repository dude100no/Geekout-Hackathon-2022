import { useAuth } from "../auth";

const Message = ({ messageData }) => {
  const auth = useAuth();
  const { datetime, message, sender, recipient } = messageData;
  const isIncoming = auth.user.userid === recipient;
  const timestamp = (new Date(datetime)).toLocaleString();
  return (
    <div className={"message " + (isIncoming ? "incoming" : "outgoing")}>
      {message}
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default Message;
