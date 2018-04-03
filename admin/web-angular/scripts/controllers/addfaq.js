angular.module('sbAdminApp')
  .controller('Addfaq', function($scope,$position,$http,$timeout) {


  $scope.form = {};

      $scope.save = function() {

                   

          $scope.submitted = true;

         var payload = new FormData();
        payload.append("heading", $scope.heading);
        payload.append("sub_heading", $scope.subheading);


        payload.append("description", $scope.description);


         { 
        $http({ url :'http://localhost:7000/faq',
        		data :  payload,
        		method : 'POST',
                headers: {
                    'Content-type': undefined
                }
            })
            .then(function(data) {

     if(data.status== 200){

        $scope.successMessage = 'Successfully Added Faq !';
        $scope.successMessagebool = true;
        $timeout(function () {
            $scope.successMessagebool = false;
       window.location.replace("#/dashboard/faq");
        }, 1000);
        }else{


          $scope.successMessage = 'Failed  Added Faq !';
         $scope.successMessagebool = true;
            $timeout(function () {
            $scope.successMessagebool = false;
           }, 1000);

        }

                // alert($scope.ListProducts);

            });
         
     }
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



 