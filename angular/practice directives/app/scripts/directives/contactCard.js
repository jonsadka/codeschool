angular.module('app.directives.contactCard',[])
  .directive('contactCard',function(){
    return {
      // style of tag
      restrict: 'A',
      scope: {
        // data set: binding is going both ways
        friend: '=',
        title: '='
      },
      transclude: true,
      replace: true,
      templateUrl: 'templates/contactCard.html',
      controller: function($scope, $interval){
        console.log($scope.friend);
        $interval(function(){
          console.log('Interval');
        },1000)
      }
    };
  });