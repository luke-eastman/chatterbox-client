var Rooms = {
  storage: {},

  add: function(roomName) {
    Rooms.storage[roomName] = {'name': roomName};
  }


};