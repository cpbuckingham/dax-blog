(function(){
  angular
    .module('login', ['ngRoute'])
    .config(routeConfig)
    .controller('LoginController', LoginController)

  routeConfig.$inject = ['$routeProvider,$locationProvider']
  LoginController.$inject = []

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/auth/login',{
        templateUrl:'/views/login',
        controller:'LoginController',
        controllerAs:'login'
      })
  }

  function LoginController(){
    this.greeting = 'Hello.'
  }
})()
