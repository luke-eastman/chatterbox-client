var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var encodedMessage = encodeURIComponent($('input#message').val());
    var message = {
      username: App.username,
      text: encodedMessage,
      room: 'lobby'
    };

    console.log('click!');
    Parse.create(message, App.stopSpinner());
    App.startSpinner();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};