angular.module('sbAdminApp', ['vsGoogleAutocomplete'])
  .controller('Addstore', function($scope,$position,$http,$timeout, BASE_URL) {

 $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';



 $scope.location ={}
$scope.streetNumber = {
    name: '',
    place: '',
    components: {
      placeId: '',
      streetNumber: '', 
      street: '',
      city: '',
      state: '',
      countryCode: '',
      country: '',
      postCode: '',
      district: '',
      location: {
        lat: '',
        long: ''
      }
    }
  };

 $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

 $scope.setSelected = function(selected) {
    $scope.description = selected;
  }

  $scope.form = {};

      $scope.save = function() {
$scope.latitude = $scope.streetNumber.components.location.lat;

$scope.longttude = $scope.streetNumber.components.location.long;

console.log($scope.longttude);
console.log($scope.storename);
            $scope.submitted = true;

         var payload = new FormData();
if ($scope.Image) {
	payload.append('file', $scope.Image);

     payload.append("Image",$scope.Image.name);
      payload.append("latitude",$scope.latitude);
payload.append("longttude",$scope.longttude);
   payload.append("storename",$scope.storename);

   payload.append("location",$scope.streetNumber.name);
  

    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);


        payload.append("address", $scope.streetNumber.components.city);
        payload.append("re_address",  CKEDITOR.instances['editor1'].getData());



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



 