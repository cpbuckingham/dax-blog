(function(){
  angular
    .module('login', [])
    .config(routeConfig)
    .controller('LoginController', LoginController)


  routeConfig.$inject = ['$routeProvider', '$locationProvider'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/auth/login',{
        templateUrl:'/views/blog/login',
        controller:'LoginController',
        controllerAs:'login'
      })

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    })
  }

  function LoginController(){
    this.greeting = 'Hello.'
  }
})();
