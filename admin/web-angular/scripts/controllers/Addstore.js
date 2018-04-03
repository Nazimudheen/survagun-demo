angular.module('sbAdminApp')
  .controller('Addstore', function($scope,$position,$http,$timeout, BASE_URL) {


  $scope.form = {};

      $scope.save = function() {
            $scope.submitted = true;

         var payload = new FormData();
    
		
if ($scope.Image) {
	payload.append('file', $scope.Image);

     payload.append("Image",$scope.Image.name);

   payload.append("location",$scope.location);


    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);


        payload.append("address", $scope.description);
        payload.append("re_address", $scope.r_description);



        $http({ url :BASE_URL+'/store',
        		data :  payload,
        		method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(data) {
     if(data.status== 200){

        $scope.successMessage = 'Successfully Added Store !';
        $scope.successMessagebool = true;
        $timeout(function () {
            $scope.successMessagebool = false;
       window.location.replace("#/dashboard/store");
        }, 1000);
        }else{


          $scope.successMessage = 'Failed  Added Store !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 1000);

        }

                // alert($scope.ListProducts);

            });
          };
        }

    


















    
}).directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };



  }]);



 