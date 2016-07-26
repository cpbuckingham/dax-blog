(function(){
  angular
    .module('blogFactory')
    .factory('Blogs', Blogs)

  Blogs.$inject = ['$http'];

  function Blogs($http){
    var blogMethods = {
      getPosts: getPosts
    }

    function getPosts(){
      http({
        method:'get',
        url:'/api/posts'
      }).success(results => {
        console.log(results.data);
      })
    }
  }
})();
