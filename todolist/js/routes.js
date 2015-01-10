var Router = require('director').Router;
var About = require('./components/about');
var Todolist = require('./components/todolist');
//var FluxCartActions = require('./actions/FluxCartActions');

//console.log('Director Router: ',Router);
// We're going to load all our routes here... lawl

var about = function () {
    console.log("about page");
    clear();
    React.render(
        <div> <About /> </div>,
        document.getElementById('todolist')
    );
    //foo.remove();
    //FluxCartActions.selectProduct(1);

};

var clear = function () {
    React.unmountComponentAtNode(document.getElementById('todolist'));
};

var home = function () {
    console.log('HOME!');
    clear();
    React.render(
        <div> <Todolist /> </div>,
        document.getElementById('todolist')
    );
};

var foobar = function () {
    console.log('foobaz!!');
};
var routes = {
    '/about': about,
    '/': home
};

var router = new Router(routes);
//router.configure();
console.log('foobar', router);

module.exports = router;