angular.module('sbAdminApp',['ngMap','ui.filters'],)
  .controller('store', function($scope,$position,$http,$state,$timeout,BASE_URL) {

$scope.menuItems ='contact';


$scope.ngShowhide = false;
            $scope.ngShowhideFun = function(flag) {
                if (flag) {
                    $scope.ngShowhide = false;
                } else {
                    $scope.ngShowhide = true;
                }
            };



 $scope.myVar = false;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };

 $scope.select = function(selected) {

    $scope.paginate1 = selected;
     $scope.myVar = false;

  }

$scope.MapChange = function(data){

var lat = data.latitude;
var lon = data.longttude;

$scope.latitude_Map = lat;
$scope.longttude_Map = lon;
// console.log($scope.latitude_Map);
// console.log($scope.longttude_Map);
}


$http.get(BASE_URL+"/storeget").then(function(response) {
      $scope.content = response.data;


$scope.totalItems = $scope.content.length;
  $scope.currentPage = 1;
  // $scope.numPerPage = 3;
  $scope.paginate = function(value) {
    var begin, end, index;
    begin = ($scope.currentPage - 1) * $scope.numPerPage;
    end = begin + $scope.numPerPage;
    index = $scope.content.indexOf(value);
    return (begin <= index && index < end);
  };
             
  });

$http.get(BASE_URL+"/list_Map_one").then(function(response) {
      var cont_Map = response.data;
for(var i = 0; i < cont_Map.length; i++){
      $scope.latitude_Map = cont_Map[i].latitude;

   $scope.longttude_Map =   cont_Map[i].longttude;

}
  });

$http.get(BASE_URL+"/storeget").then(function(response) {
$scope.contentMap = response.data;
      });

$scope.edit = function(id,image,heading,subheading,description) {


$scope.id =id;

$scope.image = image;

$scope.heading = heading;


$scope.subheading = subheading;

$scope.description = description;

  $state.go('deatils_article', { 'index': $scope.id, 'image': $scope.image,'heading': $scope.heading ,'subheading': $scope.subheading ,'description': $scope.description })

 	}



$scope.save = function() {
            $scope.submitted = true;

         var payload = new FormData();

         // alert($scope.name);  
    
    

          if ($scope.myForm.$valid) {

     payload.append("name",$scope.name);



    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);


        payload.append("message", $scope.message);

        $http({ 
            url :BASE_URL+'/contact',
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
       window.location.replace("#/contact");
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

    



$scope.save1 = function() {

           
  $scope.submitted = true;

         var payload = new FormData();

         // alert($scope.name);  
    
    

          if ($scope.myForm.$valid) {





    payload.append("email", $scope.email);
        payload.append("phone", $scope.phone);




        $http({ 
            url :BASE_URL+'/mail',
            data :  payload,
            method : 'POST',
                headers: {
                    'Content-type': 'application/json'
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
