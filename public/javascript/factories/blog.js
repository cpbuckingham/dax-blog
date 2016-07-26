(function(){
  angular
    .module('blogFactory',[])
    .factory('Blogs', Blogs)

  Blogs.$inject = ['$http'];

  function Blogs($http){
    var blogMethods = {
      getPosts: getPosts
    }

    return blogMethods;

    function getPosts(){
      return $http({
        method:'get',
        url:'/api/posts'
      });
    }
  }
})();
