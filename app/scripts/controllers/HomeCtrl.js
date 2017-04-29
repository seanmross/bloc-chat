(function(){
  function HomeCtrl(Room, $uibModal){
    //method to retrieve all child objects using room service
    this.getRooms = Room.all;

    //function to open modal instance
    this.open = function() {
      var modalInstance = $uibModal.open({  //instantiate new instance of modal object
        templateUrl: '/templates/modal.html', //create using template form
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'md'
      });

      modalInstance.result.then(
        function(userInput) {
          Room.addRoom(userInput);
        });

    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
