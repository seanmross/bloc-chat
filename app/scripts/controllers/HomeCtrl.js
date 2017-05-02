(function(){
  function HomeCtrl($scope, $uibModal, Room, Message){
    //method to retrieve all child objects using room service
    this.getRooms = Room.all;
    //scope object activeRoom to hold active room
    $scope.activeRoom = null;

    //function to open modal instance
    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
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
      //set active room object equal to room's $value property
      $scope.activeRoom = room.$value;
      //use Message service to set getMessages object equal to room's $id property
      $scope.activeMessages = Message.getByRoomId(room.$id);
    }

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();
