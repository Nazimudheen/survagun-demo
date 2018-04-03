angular.module('sbAdminApp')
  .controller('details_article', function($scope,$position,$http,$state,$stateParams,$timeout) {




$scope.index = $stateParams.index;

 $scope.img = $stateParams.image

$scope.heading = $stateParams.heading;


$scope.subheading = $stateParams.subheading;

$scope.description = $stateParams.description;



$http.get("http://localhost:7000/articleget").then(function(response) {
      $scope.content = response.data;   
  });





$scope.edit = function(id,image,heading,subheading,description) {


$scope.id =id;

$scope.image = image;

$scope.heading = heading;


$scope.subheading = subheading;

$scope.description = description;

  $state.go('deatils_article', { 'index': $scope.id, 'image': $scope.image,'heading': $scope.heading ,'subheading': $scope.subheading ,'description': $scope.description })

  }











  });
 