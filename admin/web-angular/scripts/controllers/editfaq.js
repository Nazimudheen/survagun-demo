angular.module('sbAdminApp')
  .controller('editfaq', function($scope,$position,$http,$state,$stateParams,$timeout) {




$scope.index = $stateParams.index;


$scope.heading = $stateParams.heading;


$scope.subheading = $stateParams.subheading;

$scope.description = $stateParams.description;







$scope.save = function() {
         var payload = new FormData();
        
         payload.append("Index",$scope.index);

         console.log($scope.index);

         payload.append("heading",$scope.heading);
         payload.append("sub_heading", $scope.subheading);
         payload.append("description", $scope.description);



$http({
        method: 'PUT',
        url: 'http://localhost:7000/faqedit',
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
       window.location.replace("#/dashboard/faq");
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
 