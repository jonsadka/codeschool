angular.module('app.directives.timeDots',[])
  .directive('timeDots', function(){
    return {
      templateUrl: 'templates/dataDots.html',
      controller: function($scope){
        console.log("Yes")
      }
    }
  })