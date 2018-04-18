angular.module('sbAdminApp')
  .controller('News', function($scope,$position,$http,$state,$timeout, BASE_URL) {
$scope.menuItems ='News';

  
$http.get(BASE_URL+"/newsget").then(function(response) {
      $scope.content = response.data;


$scope.totalItems = $scope.content.length;
  $scope.currentPage = 1;
  $scope.numPerPage = 8;
  $scope.paginate = function(value) {
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.content.indexOf(value);
    return (begin <= index && index < end);
  };
             
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
