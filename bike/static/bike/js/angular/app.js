var myApp = angular
.module(
    'myTest', [
    'ngCookies',
    'ui.bootstrap',
    'ui.router'
])
    .config([
    '$httpProvider',
    '$interpolateProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function($httpProvider, $interpolateProvider) {

        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    }]).run([
    '$http',
    '$cookies',
    function($http, $cookies) {
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    }]);