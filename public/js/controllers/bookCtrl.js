angular.module('Bookshelf').controller('bookCtrl', function ($scope, getOneBookService, $stateParams) {
    // console.log($stateParams);
    // $scope.book = libraryService.getOneBook($stateParams.isbn);
    // $scope.googleBook = libraryService.getBook($stateParams.isbn);
    // console.log($scope.googleBook);

 const id = $stateParams.id;
    getOneBookService.getOneBook(id).then(function (dataFromService) {
      $scope.book = dataFromService;
    });
})
