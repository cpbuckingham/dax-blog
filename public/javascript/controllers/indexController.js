(function(){
  angular
    .module('index',[])
    .controller('IndexController', IndexController)

  IndexController.$inject = ['Blogs'];

  function IndexController(Blogs){
    var store = this;
    store.greeting = 'I am connected';

    Blogs.getPosts().success(results => {
      store.posts = results;
    })

  }
})();
