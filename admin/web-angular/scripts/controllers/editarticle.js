angular.module('sbAdminApp')
  .controller('editarticle', function($scope,$position,$http,$state,$stateParams,$timeout, BASE_URL) {




$scope.index = $stateParams.index;

var img = $stateParams.image
    $scope.urlImg = 'Local_FS/article/'+img;

$scope.heading = $stateParams.heading;


$scope.subheading = $stateParams.subheading;

$scope.description = $stateParams.description;







$scope.save = function() {
         var payload = new FormData();
          if($scope.Image) // if a is negative,undefined,null,empty value then...
               {
           payload.append("Image",$scope.Image.name);
           payload.append('file', $scope.Image);


          }
         payload.append("Index",$scope.index);


         payload.append("heading",$scope.heading);
         payload.append("subheading", $scope.subheading);
         payload.append("description", CKEDITOR.instances['editor1'].getData());



$http({
        method: 'PUT',
        url: BASE_URL+'/articleedit',
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
       window.location.replace("#/dashboard/article");
        }, 1000);
        }else{


          $scope.successMessage = 'Updated Not Successfull !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 1000);

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
 