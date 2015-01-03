myApp.controller('ModalCtrl', function ($scope, $modal) {
    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl'
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

myApp.controller('ModalInstanceCtrl', function ($scope, $http, $modalInstance) {
    $scope.myForm = {};
    $scope.myForm.name = "";
    $scope.myForm.username = "";
    $scope.myForm.password = "";

    $scope.myForm.success = false;
    $scope.myForm.memberJoin = false;

    $scope.myForm.doClick = function() {

        var dataObject = {
            first_name : $scope.myForm.name,
            username : $scope.myForm.username,
            password : $scope.myForm.password
        };
        var responsePromise = $http.post("http://127.0.0.1:8000/bike/add_rider/bike_swap/23/", dataObject);

        responsePromise.success(function(data) {
            $scope.myForm.success = true;
        });
        responsePromise.error(function(data) {
            alert("AJAX failed!");
        });
    }

    $scope.myForm.JoinMember = function () {
        $scope.myForm.memberJoin = true;
    }
});