angular.module('sbAdminApp')
  .controller('details', function($scope,$position,$http,$state,$stateParams,$timeout, BASE_URL) {




$scope.index = $stateParams.index;

 $scope.img = $stateParams.image

$scope.heading = $stateParams.heading;


$scope.subheading = $stateParams.subheading;

$scope.description = $stateParams.description;



$http.get(BASE_URL+"/newsget").then(function(response) {
      $scope.content = response.data;



  
 
       
  });





$scope.edit = function(id,image,heading,subheading,description) {


$scope.id =id;

$scope.image = image;

$scope.heading = heading;


$scope.subheading = subheading;

$scope.description = description;

  $state.go('deatils', { 'index': $scope.id, 'image': $scope.image,'heading': $scope.heading ,'subheading': $scope.subheading ,'description': $scope.description })

  }











  });
 