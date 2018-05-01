


angular.module('sbAdminApp',['ngMap'])
  .controller('Store', function($scope,$position,$http,$state,$timeout,$sce, BASE_URL) {


var latitude = angular.element('#latitude').val();
console.log(latitude);
$scope.heading = 90;
    $scope.pitch = 0

$http.get(BASE_URL+"/storeget").then(function(response) {
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
    url: BASE_URL+'/storeDelete',
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
$scope.edit = function(id,re_address,address,location,phone,email,image,longttude,storename,latitude) {

$scope.id =id;

$scope.re_address = re_address;

$scope.address = address;


$scope.location = location;

$scope.phone = phone;
$scope.email = email;
$scope.image = image;

$scope.longttude = longttude;
$scope.storename = storename;
$scope.latitude = latitude;
  $state.go('dashboard.editstore', {
    'index': $scope.id,
   're_address': $scope.re_address,
    'address':$scope.address,
    'location': $scope.location,
    'phone': $scope.phone ,
    'email' : $scope.email,
    'image' :$scope.image,
    'longttude':$scope.longttude,
    'storename':$scope.storename,
    'latitude':$scope.latitude})
 	}




  }).directive('map', function(){
    return {
        priority: 99,
        terminal: true,
    };
})