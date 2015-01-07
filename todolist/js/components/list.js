var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoStore = require('../stores/TodoStore');

var List = React.createClass({
    getInitialState: function() {
        return {
            name: this.props.name || ''
        };
    },
    removeMe: function() {
        console.log('removeMe', this.props);
        TodoActions.remove(this.props.item.id);
    },

    render: function() {
       return (
           <div><input type="text" onChange={this._onChange} value={this.state.name}></input> |||
               <i>{this.props.description}</i> ||
           <button type="button" onClick={this.removeMe} >remove</button></div>
       );
    },

    // This is triggered when typing stuff.  Literally comment this out and you
    // won't be able type in the input box lol.  Try it out
    _onChange: function(event) {
        console.log('You are typing!!!');
        this.setState({
            name: event.target.value
        })
    }
});

module.exports = List;