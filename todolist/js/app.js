//var globals = require('./globals');

window.React = require('react');
var Todolist = require('./components/todolist');
var routes = require('./routes');

console.log('app.js');


// Render FluxCartApp Controller View
/*React.render(
    <div> <Todolist /> </div>,
    document.getElementById('todolist')
);*/

routes.init();