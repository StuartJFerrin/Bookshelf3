angular
    .module('Bookshelf')
    .service('postBookService', postBookService)

function postBookService($http, $q) {
    this.postBook = function (book) {
        return $http.post("http://localhost:3000/api/book/", book);
    }
}