const dbConnection = require('../config/dbConnection');

module.exports = {
  create: (req, res, next) => {
    const dbInstance = dbConnection.getDbInstance();
    const { authors, averageRating, description, isbn, ratingsCount, smallThumbnail, subtitle, title, thumbnail

      } = req.body;
    dbInstance.Books.insert(req.body)
      .then((data) => {
        console.log('data', data);
        res.status(200).send(data)
      })
      .catch((err) => {
        console.log('err', err);
        res.status(500).send()
      });
  },

  getOne: (req, res, next) => {
    const dbInstance = dbConnection.getDbInstance();
    const { params } = req;
    
    dbInstance.Books.findOne(params)
      .then(book => res.status(200).send(book))
      .catch(() => res.status(500).send());
  },

  getAll: (req, res, next) => {
    const dbInstance = dbConnection.getDbInstance();

    dbInstance.Books.find()
      .then(books => res.status(200).send(books))
      .catch(() => res.status(500).send());
  },

  update: (req, res, next) => {
    const dbInstance = dbConnection.getDbInstance();
    const { params, query } = req;

    dbInstance.Books.update({
      description: query.description
    })
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },

  delete: (req, res, next) => {
    const dbInstance = dbConnection.getDbInstance();
    const { params } = req;

    dbInstance.Books.destroy(params)
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};