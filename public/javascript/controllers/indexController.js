(function(){
  angular
    .module('index',[])
    .controller('IndexController', IndexController)

  IndexController.$inject = [];

  function IndexController(){
    var store = this;
    store.greeting = 'I am connected';
  }
})();
