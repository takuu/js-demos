var Router = require('director').Router;
var About = require('./components/about');
var Todolist = require('./components/todolist');

//console.log('Director Router: ',Router);
// We're going to load all our routes here... lawl

var about = function () {
    console.log("about page");
    clear();
    React.render(
        <div> <About /> </div>,
        document.getElementById('todolist')
    );
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

var routes = {
    '/about': about,
    '/': home
};

var router = new Router(routes);
//router.configure({ html5history: true });
console.log('router: ', router);

module.exports = router;