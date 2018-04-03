angular.module('sbAdminApp')
  .controller('Article', function($scope,$position,$http,$state,$timeout, BASE_URL) {


$http.get(BASE_URL+"/articleget").then(function(response) {
      $scope.content = response.data;


$scope.totalItems = $scope.content.length;
  $scope.currentPage = 1;
  $scope.numPerPage = 4;
  
  $scope.paginate = function(value) {
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.content.indexOf(value);
    return (begin <= index && index < end);
  };
             
  });


      $scope.delete = function(id,index) {

      var id_for_index =id;


$http({
    method: 'DELETE',
    url: BASE_URL+'/articleDelete',
    data: {
        delete_id: id_for_index
    },
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
.then(function(data) {
    console.log(data.status);
    
  if(data.status== 200){
     $timeout(function () {
          $scope.successMessage = 'Deleted Successfully !';

         $scope.successMessagebool = true;
     }, 1000);
          
   var myFish =$scope.content;
   function getObjIndex(id, arr){
   	var index = -1;
   	arr.forEach(function(obj, inx){
   		if(obj["_id"] === id){
   			index = inx;
   			
   		}
   	})
   		return index;
   }

 myFish.splice(getObjIndex(id, myFish), 1);

}
});








      }

$scope.edit = function(id,image,heading,subheading,description) {


$scope.id =id;

$scope.image = image;

$scope.heading = heading;


$scope.subheading = subheading;

$scope.description = description;

  $state.go('dashboard.editarticle', { 'index': $scope.id,'image': $scope.image ,'heading': $scope.heading ,'subheading': $scope.subheading ,'description': $scope.description })

 	}




  });
