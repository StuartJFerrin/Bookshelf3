angular.module('Bookshelf').service('libraryService', function ($http, $q) {


    this.getBook = function (searchTerm) {
        var deferred = $q.defer();
        $http({
            method: 'JSONP',
            url: 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=25&callback=JSON_CALLBACK'
        })
            .then(function (response) {
                var results = response
                    .data
                    .items
                    .map(receivedBook => receivedBook.volumeInfo)
                    .map(bookFactory);

                function bookFactory(bookMeta) {
                    const {
                        title,
                        subtitle = '',
                        authors = [],
                        description,
                        averageRating,
                        ratingsCount,
                        imageLinks = {},
                        industryIdentifiers = []
                    } = bookMeta;

                    const {
                        smallThumbnail,
                        thumbnail
                    } = imageLinks;

                    const [isbn] = industryIdentifiers
                        .filter(function (identifier) {
                            return identifier.type === "ISBN_13";
                        })
                        .map(({ identifier }) => identifier)

                    return {
                        title,
                        subtitle,
                        authors: authors.join(' & '),
                        description,
                        averageRating,
                        ratingsCount,
                        smallThumbnail,
                        thumbnail,
                        isbn
                    }
                }


                console.log(results);
                deferred.resolve(results);
            });

        return deferred.promise;
    };

});