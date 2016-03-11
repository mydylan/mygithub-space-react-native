var api = {
  getBio: function(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },
  getRepos: function(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },
  getNotes: function(username) {
    username = username.toLowerCase().trim();
    var url = `https://mygithub-space.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  addNote: function(username, note) {
    username = username.toLowerCase().trim();
    var url = `https://mygithub-space.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

module.exports = api;