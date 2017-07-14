(function(){
  function ModalCtrl($scope, $uibModalInstance){
    $scope.newChatRoom = {$value: ''}; //The ngModel directive binds an input to a property on the scope

    $scope.ok = function() {  //method to pass user input as a result
      $uibModalInstance.close($scope.newChatRoom);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModalInstance', ModalCtrl]);
})();
