app.controller('userCtrl', function ($scope, $http) {
	$scope.user = {};
	$scope.save = function () {
		$http.post('/users', $scope.user).then(function (res) {
			console.log(res);
		})
	}
})

app.controller('userListCtrl', function ($scope, $http) {
	$scope.users = [];
	$scope.refresh = function () {
		$http.get('/users').then(function (res) {
			console.log(res.data);
			$scope.users = res.data.result;
		});
	}
		
})