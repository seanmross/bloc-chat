(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    function checkTime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var period = 'am';
      if (hours > 12) {
        hours -= 12;
        period = 'pm';
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      var time = hours + ":" + minutes + period;
      return time;
    }

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
      //var date = new Date();

      var message = {
        content: newMessage,
        roomId: id,
        sentAt: checkTime(),
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
