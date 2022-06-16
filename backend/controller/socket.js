
const Message = require('../model/message.js');

const chatRooms = {};

const customerQueue = [];
const helperQueue = [];

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

  const queueNamespace = io.of('/queue');

  queueNamespace.on('connection', socket => {
    const { user_id, user_type } = socket.handshake.query;
    if (user_type === 'Professional') {
      if (customerQueue.length > 0) {
        const customer = customerQueue.shift()
        customer.socket.emit('found_match', {
          match_id: user_id
        });
        socket.emit('found_match', {
          match_id: customer.id
        });
      } else {
        helperQueue.push({ id: user_id, socket });
      }
    } else if (user_type === 'Normal') {
      if (helperQueue.length > 0) {
        const helper = helperQueue.shift()
        helper.socket.emit('found_match', {
          match_id: user_id
        });
        socket.emit('found_match', {
          match_id: helper.id
        });
      } else {
        customerQueue.push({ id: user_id, socket });
      }
    }

    socket.on('disconnect', () => {
      if (user_type === 'Normal') {
        customerQueue = [...customerQueue].filter(customer => customer.id !== user_id);
      } else if (user_type === 'Professional') {
        helperQueue = [...helperQueue].filter(helper => helper.id !== user_id);
      }
    });
  });

  const chatNamespace = io.of('/chat');

  chatNamespace.on('connection', socket => {
    const { sender_id, recipient_id } = socket.handshake.query;
    const chatRoomId = utils.getChatroomId(sender_id, recipient_id);
    socket.join(chatRoomId);

    socket.on('message', message_data => {
      const timeStamp = (new Date()).getTime();
      chatNamespace.in(chatRoomId).emit('update_message', {
        ...message_data,
        timeStamp
      });

      Message.addMsg(timeStamp, sender_id, recipient_id, message_data['message']);

    });

    socket.on('disconnect', () => {
      socket.leave(chatRoomId);
    });
    
  });
};

module.exports = initSocket;