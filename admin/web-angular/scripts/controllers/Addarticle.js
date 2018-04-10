angular.module('sbAdminApp')
  .controller('Addarticle', function($scope,$position,$http,$timeout, BASE_URL) {

  $scope.form = {};


      $scope.save = function() {
           
         var payload = new FormData();
    
		


      
if ($scope.Image) {
  payload.append('file', $scope.Image);

     payload.append("Image",$scope.Image.name);

   payload.append("heading",$scope.heading);


    payload.append("subheading", $scope.subheading);

          payload.append("description", CKEDITOR.instances['editor1'].getData());

        $http({ url :BASE_URL+'/article',
        		data :  payload,
        		method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(data) {
     if(data.status== 200){

        $scope.successMessage = 'Successfully Added article !';
        $scope.successMessagebool = true;
        $timeout(function () {
            $scope.successMessagebool = false;
       window.location.replace("#/dashboard/article");
        }, 1000);
        }else{


          $scope.successMessage = 'Failed  Added article !';
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



 