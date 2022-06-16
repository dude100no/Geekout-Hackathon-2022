
import Chat from './Chat';
import '../styles/dashboard.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Dashboard = () => {

  // const [senderId, setSenderId] = useState(2);
  // const [receiverId, setReceiverId] = useState(3);

  // const dummyData = ["dsada", "dsadasdfds", "adsadad", "dasdsdzfdsfz", "sd", 1, 3, 5, 6,5, 34,43];

  return (
    <div id="dashboard-page" className="page container-fluid">
      <div className="row container">
        <div className="row col-10 offset-1">
          <div id="side" className="container col-3 p-3 m-3">
            <h4>Chats</h4>
            <div id="chats">
              {/* { dummyData.map(data => <Button variant="outline-primary" size='md' className='action'>{ data }</Button>) } */}
            </div>
          </div>
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;