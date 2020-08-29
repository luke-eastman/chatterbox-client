var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: determine what it does

    //MessagesView.render();
  },

  render: function() {
    for (var message in Messages.storage) {
      MessagesView.renderMessage(Messages.storage[message]);
    }

    $('.username').on('click', function(event) {
      console.log(event);
      Friends.toggleStatus($(event.target).text());// Mel Brooks
    });

  },

  renderMessage: function(message) {
    $(chats).prepend(MessageView.render(message));
  }
};


