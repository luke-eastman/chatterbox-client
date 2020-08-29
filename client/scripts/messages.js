var Messages = {

  storage: {
  },
  addMessage: function(id, username, roomName, text) {
    Messages.storage[id] = {
      username: username,
      roomname: roomName,
      text: text
    };
  }

};