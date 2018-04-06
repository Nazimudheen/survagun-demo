angular.module('sbAdminApp')
  .controller('store', function($scope,$position,$http,$state,$timeout,BASE_URL) {

  // console.log(BASE_URL);
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



$scope.save = function() {
            $scope.submitted = true;

         var payload = new FormData();

         alert($scope.name);  
    
    


     payload.append("name",$scope.name);



    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);


        payload.append("message", $scope.message);



        $http({ 
            url :BASE_URL+'/contact',
            data :  payload,
            method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(data) {
     if(data.status== 200){

        $scope.successMessage = 'Successfully Added We will Contact Soon !';
        $scope.successMessagebool = true;
        $timeout(function () {
            $scope.successMessagebool = false;
       window.location.replace("#/dashboard/contact");
        }, 1000);
        }else{


          $scope.successMessage = 'Failed  Added Contact !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 1000);

        }

                alert($scope.ListProducts);

            });
          };
        

    












  });
