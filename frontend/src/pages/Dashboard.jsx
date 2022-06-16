
import Chat from './Chat';
import '../styles/dashboard.css';
import { useState } from 'react';

const Dashboard = () => {

  const [senderId, setSenderId] = useState(2);
  const [receiverId, setReceiverId] = useState(3);

  return (
    <div id="dashboard-page" className="page container-fluid">
      <div className="row container">
        <div className="row col-10 offset-1">
          <div id="side" className="container col-3 p-3 m-3">
          </div>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;