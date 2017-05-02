(function(){
  function Room($firebaseArray){
    var ref = firebase.database().ref().child("rooms"); //creates a reference to all child nodes of rooms in db
    var rooms = $firebaseArray(ref); //stores all child nodes in a room array using firebaseArray service

    return {
      all: rooms, //returns array
      addRoom: function(roomName){  //method to add new chat room
        rooms.$add(roomName);
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
