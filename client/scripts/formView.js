var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var encodedMessage = $('input#message').val();
    var message = {
      username: App.username,
      text: encodedMessage,
      room: 'lobby'
    };
    Parse.create(message);
    // remove all chat items from DOM
    $(chats).empty();
    // get the new messages
    // App.fetch will add all messages to storage
    App.fetch(MessagesView.render);

    console.log('click!');
    // App.startSpinner();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};