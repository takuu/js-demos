var Router = require('directify');
var FluxCartActions = require('./actions/FluxCartActions');

console.log('Director Router: ',Router);
// We're going to load all our routes here... lawl

var about = function () {
    console.log("about");
    //foo.remove();
    FluxCartActions.selectProduct(1);

};
var books = function () { console.log("books"); };
var viewBook = function (bookId) {
    console.log("viewBook: bookId is populated: " + bookId);
};

var home = function () {
    console.log('HOME!');
};

var routes = {
    '/about': about,
    '/books': [books, function() {
        console.log("An inline route handler.");
    }],
    '/books/view/:bookId': viewBook,
    '/': home,
    '': home
};

console.log('foobar');
var router = new Router(routes);
console.log('foobar2', router);

router.init();

module.exports = router;

/// Fu Fu Fu Fu Fu...
