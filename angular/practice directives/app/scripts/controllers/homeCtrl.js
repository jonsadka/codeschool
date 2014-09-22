angular
  .module('myApp')
  .controller('homeCtrl', function($scope){
    $scope.title = "Will it blend?";

    $scope.friends = [
      {
        id: 1,
        firstName: 'Will',
        lastName: 'Stern',
        age: 33,
        tweets: [
          {id: 1, text: 'Let\'s go have a great time'},
          {id: 2, text: '@jonsadka That was so cool'},
          {id: 3, text: '@jonjon You are so smar!!!'}
        ]
      },
      {
        id: 2,
        firstName: 'Jon',
        lastName: 'Sadka',
        age: 22,
        tweets: [
          {id: 1, text: 'Fantastic!!'},
          {id: 2, text: '@joeyjo great talk today #awesome'},
          {id: 3, text: 'I love avo with my guac :)'}
        ]
      }
    ];
  });