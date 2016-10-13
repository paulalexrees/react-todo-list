var AppDispatcher = require('./AppDispatcher');
var TodoConstants = require('./TodoConstants');

module.exports = {

  addItem: function() {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.NEW_ITEM
    });
  },

  saveItem: function(text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.SAVE_ITEM,
      text: text
    });
  },

  removeItem: function(index) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.REMOVE_ITEM,
      index: index
    });
  }
};
