var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');
var lists = require('../globals');

var _todos = [];

function _remove(id) {
    delete _todos[id];
    console.log('removing id: ', id);
}

function _create(text) {
    var item = {
        id:_todos.length,
        name: 'Task #' + parseInt(_todos.length + 1),
        description: text,
        completed: false
    };
    console.log('_creating: ', item);
    _todos.push(item);
}
var TodoStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        // emit 'change' so we run the callbacks setup in addChangeListener
        this.emit('change');
    },
    createAll: function(list) {
        _todos = list;
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    getAll: function () {
        console.log('TodoStore.getAll');
        return _todos;
    }
});

TodoStore.createAll(lists);

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var text = action.text;
    console.log('payload: ', payload);

    switch (action.actionType) {
        case TodoConstants.TODO_CREATE:
            _create(text);
            break;
        case TodoConstants.TODO_REMOVE:
            _remove(text);
            break;
        default:
    }

    TodoStore.emitChange();

    return true;
});

module.exports = TodoStore;