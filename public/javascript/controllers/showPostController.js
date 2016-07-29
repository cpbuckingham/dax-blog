(function(){
  angular
    .module('showPost', [])
    .config(routeConfig)
    .controller('ShowPostController', ShowPostController)

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    ShowPostController.$inject = ['$routeParams','Blogs']

    function routeConfig($routeProvider, $locationProvider){
      $routeProvider
        .when('/blog/:post_id', {
          templateUrl: '/views/blog/show.html',
          controller:'ShowPostController',
          controllerAs:'show'
        })

        $locationProvider.html5Mode({
          enabled:true,
          requireBase: false
        })
    }

    function ShowPostController($routeParams, Blogs){
      var store = this;

      Blogs.returnPost($routeParams.post_id)
        .success( results => {
          store.post = results;
          console.log(store.post);
        })
    }
})();
