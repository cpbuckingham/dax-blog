(function(){
  angular
    .module('blogApp',['ngRoute','blogFactory', 'index'])
    .config(routeConfig)

  routeConfig.$inject = ['$routeProvider','$locationProvider'];

  function routeConfig($routeProvider, $locationProvider){
    $routeProvider
      .when('/',{
        templateUrl:'/views/blog/postIndex.html',
        controller:'IndexController',
        controllerAs:'index'
      });

    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }

})();
