angular.module('sbAdminApp')
  .controller('editstore', function($scope,$position,$http,$state,$stateParams,$timeout, BASE_URL) {




$scope.index = $stateParams.index;

   var img = $stateParams.image
    $scope.urlImg = 'Local_FS/store/'+img;
$scope.location = $stateParams.location;


$scope.email = $stateParams.email;

$scope.phone = $stateParams.phone;


  $scope.address = $stateParams.address;
  $scope.re_address = $stateParams.re_address;







$scope.save = function() {

         var payload = new FormData();
          if($scope.Image) // if a is negative,undefined,null,empty value then...
               {
           payload.append("Image",$scope.Image.name);
           payload.append('file', $scope.Image);


          }
         payload.append("Index",$scope.index);


         payload.append("email",$scope.email);
         payload.append("phone", $scope.phone);
         payload.append("address", $scope.address);

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