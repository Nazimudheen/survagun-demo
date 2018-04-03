angular.module('sbAdminApp')
  .controller('Store', function($scope,$position,$http,$state,$timeout) {


$http.get("http://localhost:7000/storeget").then(function(response) {
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
    url: 'http://localhost:7000/storeDelete',
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
$scope.edit = function(id,re_address,address,location,phone,email,image) {

$scope.id =id;
console.log(address)
console.log(image);

$scope.re_address = re_address;

$scope.address = address;


$scope.location = location;

$scope.phone = phone;
$scope.email = email;
$scope.image = image;
  $state.go('dashboard.editstore', {'index': $scope.id,
   're_address': $scope.re_address,
    'address':$scope.address,
    'location': $scope.location,
    'phone': $scope.phone ,
    'email' : $scope.email,'image' :$scope.image})
 	}




  });
