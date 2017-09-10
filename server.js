const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const booksdb_controller = require('./controllers/booksdb_controller.js');
var passport = require('./config/auth');
var session = require('express-session');
var config = require('./config/config');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: config.secret }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/#/library',
    failureRedirect: '/auth/facebook'
}), function (req, res) {
    console.log(req.session);
});
app.get('/auth/logout', (req, res) => {
    req.logout();
    return res.redirect('/#/login');
})

app.post('/api/book', booksdb_controller.create);
app.get('/api/books', booksdb_controller.getAll);
app.get('/api/book/:id', booksdb_controller.getOne);
app.put('/api/book/:id', booksdb_controller.update);
app.delete('/api/book/:id', booksdb_controller.delete);

app.get('/me', function (req, res) {
    res.send(req.user);
})
app.use(express.static(__dirname + "/public"))

const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });