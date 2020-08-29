var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $rooms: $('#rooms'),

  initialize: function() {
  },

  render: function(room) {
    $(chats).empty();
    MessagesView.render(room);
  },

  renderRoom: function(room) {
    RoomsView.$select.append(RoomsView.roomOption(room));
  },

  roomOption: _.template(`
    <option>
      <%= name %>
    </option>
  `)
};
