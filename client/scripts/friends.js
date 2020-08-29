var Friends = {
  storage: {},
  toggleStatus: function(username) {
    if (Friends.storage[username] === undefined || Friends.storage[username] === false) {
      Friends.storage[username] = true;
    } else {
      Friends.storage[username] = false;
    }

  }
};