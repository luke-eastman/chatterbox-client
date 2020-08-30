var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: determine what it does

  },

  render: function(room = undefined) {
    if (room === undefined) {
      for (var message in Messages.storage) {
        var username = Messages.storage[message].username;// Ahmed
        MessagesView.renderMessage(Messages.storage[message]);
      }
    } else {
      for (var message in Messages.storage) {
        if (Messages.storage[message].roomname === room) {
          MessagesView.renderMessage(Messages.storage[message]);
        }
      }
    }

    $('.username').on('click', function(event) {
      Friends.toggleStatus($(event.target).text());// Mel Brooks
      MessagesView.render(App.roomname);
    });

  },

  renderMessage: function(message) {

    var messageDiv = $(MessageView.render(message));
    if (Friends.storage[message.username]) {
      messageDiv.addClass('isFriends');
    }
    $(chats).prepend(messageDiv);
  }
};


