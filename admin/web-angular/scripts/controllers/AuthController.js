//auth controller
angular.module('sbAdminApp')
    .controller("AuthController", function($scope, $http, $rootScope, $location, BASE_URL, $window) {
        $window.localStorage.clear();

        $scope.user = {
            username: '',
            password: ''
        };
        $scope.error_message = '';
        console.log(BASE_URL);

        //login call to webapi (node implemented service)
        $scope.login = function() {


            $http({
                    url: BASE_URL+'/login',
                    data: $scope.user,
                    method: 'POST'
                })
                .then(function(response, data) {
                    // console.log(response);
                    // var sucsess = response.data.print;
                    // var value = response.data.value;

                    // if (sucsess == 'sucsess') {
                    //     $rootScope.authenticated = true;
                    //     $rootScope.current_user = value;
                    //     $rootScope.sess = value;
                    //     sessionStorage.setItem('current_user', $rootScope.sess.username);

                    //     window.location.replace("#/dashboard/news");

                    // } else {

                    //     $scope.error_message = "Invalid Password"
                    //     $rootScope.sess = null;

                    // }

                    if(response.data.msg === 'OK'){
                        $rootScope.current_user = response.data.user;
                        $rootScope.authenticated = true;
                        $window.localStorage.setItem("token",response.data.token);
                        window.location.replace("#/dashboard/news");
                    } else{
                        $scope.error_message = response.data.msg;
                    }
                }, function(err) {
                    console.log(err);
                })
                .catch(function(err) {
                    console.log(err);
                })
        }

    })