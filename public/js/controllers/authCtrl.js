angular
    .module('Bookshelf')
    .controller('authCtrl', AuthController);

function AuthController(
    $scope,
    $state,
    UserService,
    libraryService
) {


    // var loggedIn = false;
    $scope.logOn = function () {
        $scope.loggedIn = true;
        $state.go("library");
    }
    $scope.registerNow = function () {
        $state.go("register");
    }
    $scope.loginWithFacebook = loginWithFacebook;


    function loginWithFacebook() {
        UserService.loginWithFacebook()
            .then(response => console.log(response));
    }
}