(function(){
  function HomeCtrl($scope, $uibModal, Room, Message){
    //method to retrieve all child objects using room service
    this.getRooms = Room.all;
    //scope object activeRoom to hold active room
    $scope.activeRoom = null;

    //function to open modal instance
    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/create-room-modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'md'
      });
      //use room service to add new room
      modalInstance.result.then(
        function(userInput) {
          Room.addRoom(userInput);
        });
    };

    //method to set active room
    this.setActiveRoom = function(room){
      //set activeRoom object equal to room that is clicked on, accessible to home controller scope
      $scope.activeRoom = room;
      //use Message service to set getMessages object equal to room's $id property
      $scope.activeMessages = Message.getByRoomId(room.$id);
    };

    //use Message service to send new message in active room
    this.sendMessage = function(){
      Message.send($scope.newMessage, $scope.activeRoom.$id);
      $scope.newMessage = null;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();
