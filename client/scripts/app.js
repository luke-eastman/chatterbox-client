var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    App.roomName = 'lobby';
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    FormView.setStatus(false);

    //Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      MessagesView.render(App.roomName);
      App.stopSpinner();
    });

    $('.addRoom').on('click', function(event) {
      var roomName = prompt('Enter a new room name:');
      Rooms.add(roomName);
      RoomsView.renderRoom(Rooms.storage[roomName]);
      RoomsView.render(roomName);
    });

    $('.submit').on('click', function(event) {
      FormView.handleSubmit(event);
    });
    RoomsView.$select.on('change', function(event) {
      App.roomName = this.value;
      RoomsView.render(this.value);
    });
  },

  fetch: function(callback = ()=>{} ) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var message of data.results) {
        var text = encodeURIComponent(message.text);
        var username = encodeURIComponent(message.username);
        var roomname = encodeURIComponent(message.roomname);
        var id = encodeURIComponent(message.objectId);
        Messages.addMessage(id, username, roomname, text);
        Rooms.add(roomname);
      }

      //loop over rooms storage
      //for each room renderRoom()
      for (var room in Rooms.storage) {
        RoomsView.renderRoom(Rooms.storage[room]);
      }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
