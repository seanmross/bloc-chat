(function(){
  function HomeCtrl(Room){
    this.getRooms = Room.all;
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})()
