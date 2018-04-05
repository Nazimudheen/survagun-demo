angular.module('sbAdminApp')
  .controller('store', function($scope,$position,$http,$state,$timeout,BASE_URL) {

  console.log(BASE_URL);
$http.get(BASE_URL+"/storeget").then(function(response) {
      $scope.content = response.data;


$scope.totalItems = $scope.content.length;
  $scope.currentPage = 1;
  $scope.numPerPage = 6;
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

  $state.go('deatils_article', { 'index': $scope.id, 'image': $scope.image,'heading': $scope.heading ,'subheading': $scope.subheading ,'description': $scope.description })

 	}




  });
