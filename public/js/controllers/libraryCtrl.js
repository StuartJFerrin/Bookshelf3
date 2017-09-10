angular.module('Bookshelf')
    .controller('libraryCtrl', function (
        $scope,
        UserService,
        libraryService,
        postBookService,
        getBooksService,
        $stateParams
    ) {
        UserService.getMe().then( function(response) {
            const user = response.data;

            if (!user) {
                return $state.go('/login');
            }
            getBooksService.getBooks().then(data => $scope.myBooks = data);
        });
        $scope.googleBooks = []

        $scope.getBook = function (searchTerm) {
            console.log(searchTerm);
            libraryService.getBook(searchTerm).then(function (dataFromService) {
                $scope.googleBooks = dataFromService;
            });
        }

        $scope.postBook = book => {
            postBookService.postBook(book)
                .then(data => getBooksService.getBooks())
                .then(data => $scope.myBooks = data);
        }
        

    });