var Friends = {
  storage: {},
  toggleStatus: function(username) {
    if (Friends.storage[username] === undefined || Friends.storage[username] === false) {
      Friends.storage[username] = true;
      alert(username + ' added as a friend');
    } else {
      Friends.storage[username] = false;
      alert(username + ' removed from friends');
    }
  }
};