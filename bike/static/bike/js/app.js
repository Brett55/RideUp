var myApp = angular
.module('myTest', [
'ngAnimate',
'ngAria',
'ngCookies',
'ngMessages',
'ngResource',
'ngRoute',
'ngSanitize',
'ngTouch',
])
.config(function ($routeProvider, $interpolateProvider, $httpProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});