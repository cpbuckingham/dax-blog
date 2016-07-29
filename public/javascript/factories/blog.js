(function(){
  angular
    .module('blogFactory',[])
    .factory('Blogs', Blogs)

  Blogs.$inject = ['$http'];

  function Blogs($http){
    var blogMethods = {
      getPosts: getPosts,
      returnPost: returnPost
    }

    return blogMethods;

    function getPosts(){
      return $http({
        method:'get',
        url:'/api/posts'
      });
    }

    function returnPost(post_id){
      return $http({
        method:'get',
        url:`/api/posts/${post_id}`
      });
    }
  }
})();
