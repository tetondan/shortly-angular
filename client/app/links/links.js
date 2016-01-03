angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.data = {links: 1};
  Links.getAll().then(function(newData){
        $scope.data.links = newData;
    });
  
});

