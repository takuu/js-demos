var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

var About = React.createClass({
    getInitialState: function() {
        return {};

    },
    componentDidMount: function() {
    },
    render: function() {
        return (
            <div>
                <h2>This is the About page</h2>
                <p>this page is dedicated to Takulist</p>
                <a href="/">go back home</a>
            </div>
        );
    }
});


module.exports = About;
