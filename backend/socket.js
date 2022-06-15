
const chatRooms = {};

const utils = {
  getChatroomId: (sender_id, recipient_id) => {
    const rooms = Object.entries(chatRooms).filter((room_id, participants) => {
      return participants.length === 2 &&
        participants.includes(sender_id) &&
        participants.includes(recipient_id)
    });
    if (rooms.length === 1) {
      return rooms[0][0]
    }
    const newRoomId = String.valueOf(Object.entries(chatRooms).length);
    chatRooms[newRoomId] = [sender_id, recipient_id];
    return newRoomId;
  }
};

const initSocket = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', socket => {
    const { sender_id, recipient_id } = socket.handshake.query;
    const chatRoomId = utils.getChatroomId(sender_id, recipient_id);
    socket.join(room_id);

    socket.on('message', message_data => {

      io.in(chatRoomId).emit('update_message', {
        ...message_data,
        timeStamp: (new Date()).getTime()
      });

      // TODO: store encrypted message to database

    });

    socket.on('disconnect', () => {
      socket.leave(chatRoomId);
    });
    
  });
};

module.exports = initSocket;