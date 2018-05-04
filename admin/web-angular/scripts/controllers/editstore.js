angular.module('sbAdminApp',['vsGoogleAutocomplete'])
  .controller('editstore', function($scope,$position,$http,$state,$stateParams,$timeout, BASE_URL) {


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

    $scope.options1 = null;
    $scope.details1 = '';


 $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

 $scope.setSelected = function(selected) {
    $scope.address = selected;
  }


 $scope.location ={}











































$scope.index = $stateParams.index;

   var img = $stateParams.image
    $scope.urlImg = 'Local_FS/store/'+img;
$scope.location = $stateParams.location;


$scope.email = $stateParams.email;

$scope.phone = $stateParams.phone;


  $scope.address = $stateParams.address;
  $scope.re_address = $stateParams.re_address;


 $scope.latitude = $stateParams.latitude;
  $scope.longttude = $stateParams.longttude;
  $scope.storename = $stateParams.storename;





$scope.save = function() {


$scope.latitude = $scope.streetNumber.components.location.lat;

$scope.longttude = $scope.streetNumber.components.location.long;
         var payload = new FormData();



          if($scope.Image) // if a is negative,undefined,null,empty value then...
               {
           payload.append("Image",$scope.Image.name);
           payload.append('file', $scope.Image);


          }
         payload.append("Index",$scope.index);
 payload.append("location",$scope.streetNumber.name);
   payload.append("latitude",$scope.latitude);
payload.append("longttude",$scope.longttude);
   payload.append("location",$scope.streetNumber.name);

         payload.append("email",$scope.email);
         payload.append("phone", $scope.phone);
         payload.append("address", $scope.streetNumber.components.city);

         payload.append("re_address",  CKEDITOR.instances['editor1'].getData());


$http({
        method: 'PUT',
        url: BASE_URL+'/storeedit',
        data: payload,
        headers: {
                    'Content-type': undefined
        }
    }).then(function(data) {

            if(data.status== 200){

       $scope.successMessage = 'Updated Successfull !';
        $scope.successMessagebool = true;
        $timeout(function () {
            $scope.successMessagebool = false;
       window.location.replace("#/dashboard/store");
        }, 5000);
        }else{


          $scope.successMessage = 'Updated Not Successfull !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 5000);

        }

                // alert($scope.ListProducts);

            });
          };
        


        




 $scope.setFile = function(element) {
  $scope.currentFile = element.files[0];
   var reader = new FileReader();

  reader.onload = function(event) {
    $scope.urlImg = event.target.result
    $scope.$apply()

  }
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(element.files[0]);
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