(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(id) {
      //Logic for filtering messages
      messages = $firebaseArray(ref.orderByChild("roomId").equalTo(id));
      return messages;
    };

    Message.send = function(newMessage, id){
      //Send method logic
      //create new message object to pass to firebase
      //set content equal to newMessage argument
      //set the roomId equal to roomId argument
      //use cookies service to set username
      //use .$add method to add message object to firebase [bloc-chat-f6e23 -> messages]
      var message = {
        content: newMessage,
        roomId: id,
        sentAt: '12:00',
        username: $cookies.get('blocChatCurrentUser'),
      };

      messages.$add(message);
    };
    return Message;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
