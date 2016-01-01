angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {url: 1};

  $scope.addLink = function (link){
    $scope.link.url = link;
    Links.addOne($scope.link);
  };

});



