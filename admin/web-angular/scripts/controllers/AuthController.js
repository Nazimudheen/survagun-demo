//auth controller
angular.module('sbAdminApp')
    .controller("AuthController", function($scope, $http, $rootScope, $location, BASE_URL) {
        $scope.user = {
            username: '',
            password: ''
        };
        $scope.error_message = '';
        console.log(BASE_URL);

        //login call to webapi (node implemented service)
        $scope.login = function() {


            $http({
                    url: 'http://localhost:7000/login',
                    data: $scope.user,
                    method: 'POST',
                    headers: {
                        'Content-type': undefined
                    }
                })
                .then(function(response, data) {

                    var sucsess = response.data.print;
                    var value = response.data.value;

                    if (sucsess == 'sucsess') {
                        $rootScope.authenticated = true;
                        $rootScope.current_user = value;
                        $rootScope.sess = value;
                        sessionStorage.setItem('current_user', $rootScope.sess.username);

                        window.location.replace("#/dashboard/news");

                    } else {

                        $scope.error_message = "Invalid Password"
                        $rootScope.sess = null;

                    }




                }, function(err) {
                    console.log(err);
                })
                .catch(function(err) {
                    console.log(err);
                })
        }

    })