
import Chat from '../components/Chat';
import '../styles/dashboard.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext, useAuth } from '../auth';
import { useContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { get_user_info, user_msg_view } from '../utils';
import QueueModal from '../components/QueueModal';

const Dashboard = () => {

  const auth = useContext(AuthContext);

  const [recipientId, setRecipientId] = useState(null);
  const [showQueueModal, setShowQueueModal] = useState(false);

  const userId = auth.user.userid;
  const [matches, setMatches] = useState([]);
  const [people, setPeople] = useState([]);

  const logOut = () => {
    console.log('d')
    auth.signOut();
    // navigate('/');
  };

  const onGetMatchId = (id) => {
    setMatches([...matches, id]);
    setShowQueueModal(false);
  };

  useEffect(() => {
    (async () => {
      const messages = await user_msg_view(userId);
      setMatches([...new Set(messages.map(message => message.sender === userId ? message.recipient : message.sender))]);
    })();
  }, [userId]);

  useEffect(() => {
    (async () => {
      setPeople(await Promise.all(matches.map(async id => (await get_user_info(id))[0].first_name)));
    })();
  }, [matches]);

  return (
    <div id="dashboard-page" className="page container-fluid">
      {showQueueModal && <QueueModal onGetMatchId={onGetMatchId} show={showQueueModal} onHide={() => setShowQueueModal(false)} type={auth.user.type} />}
      <div className="row container">
        <div className="row col-10 offset-1">
          <div id="side" className="container col-3 p-3 m-3">
            <p>Logged in as [{ auth.user.userid }] { auth.user.first_name }</p>
            <Button onClick={logOut}>Log Out</Button>
            <h4>Chats</h4>
            <div id="chats">
              {
                people.length === 0 &&
                <div className='no-matches'>
                  <div>You do not have any past chats.</div>
                  <Button onClick={() => setShowQueueModal(true)} variant="outline-secondary" size="md">Find Chat</Button>
                </div>
              }
              {
                people.length > 0 &&
                <>
                  { [...people.map((match, index) =>
                    <Button onClick={() => setRecipientId(matches[index])} variant="outline-primary" size='md' className='action'>{ match }</Button>
                    ), <Button className='find-new' onClick={() => setShowQueueModal(true)} variant="outline-secondary" size="md">Find New Chat</Button>] }
                  </>
              }
              
            </div>
          </div>
          <Chat recipientId={recipientId} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
