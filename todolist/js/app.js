var globals = require('./globals');

window.React = require('react');
var Todolist = require('./components/todolist');

console.log('app.js');


// Render FluxCartApp Controller View
React.render(
    <div> <Todolist /> </div>,
    document.getElementById('todolist')
);
