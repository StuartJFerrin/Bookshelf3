(() => {
    'use strict';

    angular
        .module('Bookshelf')
        .service('UserService', UserService);

    function UserService($http, $q) {
        const svc = this;
        
        svc.loginWithFacebook = loginWithFacebook;
        svc.getMe = getMe;

        function loginWithFacebook() {
            return $http.get('/auth/facebook');
        }
        function getMe() {
            return $http.get('/me');
        }
    }
})();