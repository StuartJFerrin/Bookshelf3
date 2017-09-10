angular.module('Bookshelf').service('getOneBookService', function($http, $q) {

this.getOneBook = function(id) {
    return $http.get("http://localhost:3000/api/book/" + id).then(data => {
        console.log("One Book", data)
        return data.data;
    });
}

    
})