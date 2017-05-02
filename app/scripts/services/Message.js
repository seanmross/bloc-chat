(function() {
  function Message($firebaseArray) {
    return {
        getByRoomId: function(id) {
          // Filter the messages by their room ID.
          var messages = $firebaseArray(firebase.database().ref().child("messages").orderByChild("roomId").equalTo(id));
          return messages;
        }
      };
  }



  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
