(function(){
  angular
    .module('blogApp',['ngRoute','blogFactory','navbarDirective', 'index', 'about','showPost','login'])
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


  // Misc
  window.onload = function(){
    var navbar = document.getElementById('navbar'),
    height = navbar.clientHeight;
    console.log(height);
    document.getElementById('main').style.paddingTop += height * 5;

  }

})();
