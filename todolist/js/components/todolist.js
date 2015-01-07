var React = require('react');
var List = require('./list');
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

console.log('globalList: ', window.globalList);

var TodoList = React.createClass({

    getInitialState: function() {
        return {
            //lists: window.globalList
            lists: TodoStore.getAll()
        };

    },
    componentDidMount: function() {
        TodoStore.addChangeListener(this._onChange);
    },
    addToList: function(){
        TodoActions.create('new task item');
    },
    render: function() {
        var self = this;
        var lists = this.state.lists;
        return (
            <div>
                <h1>TakuList</h1>
                {Object.keys(lists).map(function(index) {
                    var list = lists[index];
                    return (
                        <List name={list.name} description={list.description} item={list} />
                    )
                })}
                <button type="button" onClick={this.addToList} >Click</button>
            </div>
        );
    },
    _onChange: function() {
        console.log('emit: change');
        // this is called on emit 'change' because we added the callback to
        // addChangeListener 'change' cb
        this.setState({
            list: TodoStore.getAll()
        })
    }
});


module.exports = TodoList;