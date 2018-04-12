angular.module('sbAdminApp')
  .controller('home', function($scope,$position,$http,$state,$timeout,BASE_URL) {

 





$scope.save = function() {

            $scope.submitted = true;

         var payload = new FormData();

         // alert($scope.name);  
    
    
          if ($scope.myForm.$valid) {

     payload.append("name",$scope.name);



    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);




        $http({ 
            url :BASE_URL+'/subcription',
            data :  payload,
            method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(response) {
              // alert();
     if(response.data.msg=='successfull'){
       $scope.email = "";
       $scope.phone = "";
         $scope.myForm.$setValidity();
        $scope.myForm.$setPristine();
        $scope.myForm.$setUntouched(); 

        $scope.successMessage = ' Thank You We Will Get Back to You Soon!';
     $timeout(function () {
                                    $scope.successMessage = false;
       window.location.replace("#/home");
                                }, 2000);
        }else{


          $scope.successMessage = 'Failed  Added Contact !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 1000);

        }

                // alert($scope.ListProducts);

            });
          }else{
   $scope.successMessage = 'Please Enter Columns !';
    $timeout(function () {
                                    $scope.successMessage = false;
       window.location.replace("#/home");
                                }, 2000);

          }
        }

    












  });
