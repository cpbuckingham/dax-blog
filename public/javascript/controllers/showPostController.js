(function(){
  angular
    .module('showPost', [])
    .router(routeConfig)
    .controller('ShowPostController', ShowPostController)

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider){
      $routeProvider
        .when('/blog/:id', {
          templateUrl: '/views/blog/show.html',
          controller:'ShowPostController',
          controllerAs:'show'
        })

        $locationProvider.html5Mode({
          enabled:true,
          requireBase: false
        })
    }

    function ShowPostController(){
      this.greeting = "Hey."
    }
})();
