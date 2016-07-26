(function(){
  angular
    .module('navbarDirective', [])
    .directive('navbar', navbar)

  function navbar(){
    var navbarObject = {
      restrict:'EA',
      templateUrl:'/views/partials/navbar.html',
      controller:NavbarController,
      controllerAs:'navbar'
    }

    return navbarObject;

    function NavbarController(){
      var store = this;
      store.greeting = 'Hello.'
    }
  }
})();
