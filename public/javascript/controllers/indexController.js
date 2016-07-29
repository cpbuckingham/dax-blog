(function(){
  angular
    .module('index',[])
    .controller('IndexController', IndexController)

  IndexController.$inject = ['Blogs'];

  function IndexController(Blogs){
    var store = this;
    store.greeting = 'I am connected';

    Blogs.getPosts().success(results => {
      console.log(results);
      store.posts = results;
    })

  }
})();
