(function(){

  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }

  //run block
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');  //$cookies.get method sets value of 'blocChatCurrentUser' cookie equal to currentUser

    if (currentUser === null) { //if there is no currentUser, create modal instance
      var modalInstance = $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/create-username-modal.html',
        controller: function($scope, $uibModalInstance){
          $scope.newUser = {username: ''}; //The ngModel directive binds an input to a property on the scope
          $scope.create = function() {
            if (currentUser != ''){
              $uibModalInstance.close($scope.newUser.username);
            } else {
              alert('Enter a value');
            }
          };
        },
        size: 'md'
      });

      modalInstance.result.then(function(un) {
          $cookies.put('blocChatCurrentUser', un);
      });
    }
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config)
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
