
const Message = ({ isIncoming, message }) => {

  return (
    <div className={'message ' + ( isIncoming ? 'incoming' : 'outgoing' )}>
      { message }
    </div>
  );

};

export default Message;