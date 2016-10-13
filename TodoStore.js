var AppDispatcher = require('./AppDispatcher');
var TodoConstants = require('./TodoConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

// Define store as empty array
var _store = {
  list: [],
  editing: false
};

// Define public event listeners and getters that
// the views will use to listen for changes and
// retrieve the store
var TodoStore = ObjectAssign( {}, EventEmitter.prototype, {

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function() {
    return _store;
  }

});

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(aciton.actionType) {

    case AppConstants.NEW_ITEM:
      // Add the data defined in the TodoActions
      // which the View will pass as a payload
      _store.editing = true;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.SAVE_ITEM:
      // Add the data defined in the TodoActions
      // which the View will pass a payload
      _store.list.push(action.text);
      _store.editing = false;
      TodoStore.emit(CHANGE_EVENT);
      break;

    case AppConstants.REMOVE_ITEM:
      // View should pass the text's index that
      // needs to be removed from the store
      _store.list.splice(action.index, 1);
      TodoStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

module.exports = TodoStore;
