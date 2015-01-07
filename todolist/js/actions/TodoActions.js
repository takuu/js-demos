var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

    create: function(text) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },
    remove: function(id) {
        console.log('TodoActions.remove: ', id);
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_REMOVE,
            text: id
        });
    }

};

module.exports = TodoActions;