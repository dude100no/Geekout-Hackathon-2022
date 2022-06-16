import { useAuth } from "../auth";

const Message = ({ messageData }) => {
  const auth = useAuth();
  const { datetime, message, sender, recipient, sentiment } = messageData;
  const isIncoming = auth.user.userid === recipient;
  const timestamp = (new Date(datetime)).toLocaleString();
  return (
    <div className={"message " + (isIncoming ? "incoming" : "outgoing")}>
      {auth.user.type === 'Professional' && isIncoming && sentiment !== undefined &&
      <span className="sentiment">Sentiment: {sentiment}</span> }
      {message}
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default Message;
