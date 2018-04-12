angular.module('sbAdminApp')
  .controller('home', function($scope,$position,$http,$state,$timeout,BASE_URL) {

 

console.log(BASE_URL);



$scope.save1 = function() {

           
  $scope.submitted = true;

         var payload = new FormData();

        // alert($scope.email);  
    
    

          if ($scope.myForm.$valid) {





    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);




        $http({ 
            url :BASE_URL+'API/mail',
            data :  payload,
            method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(response) {
              // alert();
     if(response.data.msg=='successfull'){
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.message = "";
        $scope.myForm.$setValidity();
        $scope.myForm.$setPristine();
        $scope.myForm.$setUntouched(); 
        $scope.successMessage = 'Thank you For reaching to us. We will contact you soon!';
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
          };



        }


    












  });
