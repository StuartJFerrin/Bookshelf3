angular.module('Bookshelf').service('getBooksService', function($http, $q) {
this.getBooks = function() {
    return $http.get("http://localhost:3000/api/books/").then(data => {
        console.log("hello", data)
        return data.data;
    });
}

    
})