angular
  .module('event')
  .controller("ShowController", function ($scope, Event, supersonic) {
    supersonic.ui.views.current.params.onValue( function (Event) { 
   
    $scope.events = event.event; 

});
Event.find($scope.events).then( function (Event) {
    $scope.$apply( function () {
      $scope.event = Event;

    });
  });

    
  });