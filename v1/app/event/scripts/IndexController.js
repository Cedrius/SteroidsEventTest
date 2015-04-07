angular
  .module('event')
  .controller("IndexController", function ($scope, Event, supersonic) {
    $scope.events = null;
    

    Event.all().whenChanged( function (events) {
        $scope.$apply( function () {
          $scope.events = events;
          
        });
    });
  });


  

