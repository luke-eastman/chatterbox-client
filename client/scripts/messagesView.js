var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: determine what it does

  },

  render: function(room = undefined) {
    if (room === undefined) {
      for (var message in Messages.storage) {
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
    });

  },

  renderMessage: function(message) {
    $(chats).prepend(MessageView.render(message));
  }
};


