/*
 * This is a page controller, it should contain the actions/functions related to
 * the current page.
*/
App.createController('index', {

  'view': {
    'template': 'index',
    'data': {
      'todos': [],
      'notCompletedCount': 0
    }
  },

  'controller': function(routeData){
    // Add route data to the model so it can be used on the templates
    this.set('path', routeData.path);

    // Get the list of todos from LocalStorage and add to model
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.set('todos', todos);

    // Reset the not completed count for each page load
    this.set('notCompletedCount', 0);

    // Count the amount of todos that are completed
    if(todos.length) {
      for (var i = todos.length - 1; i >= 0; i--) {
        if(!todos[i].completed) {
          this.add('notCompletedCount');
        }
      }
    }
  },

  'actions': {
    createTodo: function(e, newTask) {
      // Get the keycode to determine if submitting
      var keyCode = e.original.keyCode;
      if(keyCode === 13 && newTask.length > 0) {
        // Create a new todo item and add it to the list
        var newTodo = {value: newTask, editing: false, completed: false};
        this.push('todos', newTodo);

        // Update localstorage
        App.Helpers.updateLocalStorage(this.get('todos'));

        // Clear the input value
        this.set('newTodo', '');
      }
    },
    destroyTodo: function(e, index) {
      // Remove item at given index
      this.splice('todos', index, 1);

      // Update localstorage
      App.Helpers.updateLocalStorage(this.get('todos'));
    },
    editTodo: function(e) {
      // Get the value and switch boolean value
      var item = this.get(e.keypath);
      item.editing = !item.editing;
      this.set(e.keypath, item);

      // Update localstorage
      App.Helpers.updateLocalStorage(this.get('todos'));
    },
    editingValue: function(e) {
      // Get the keycode to determine if submitting
      var keyCode = e.original.keyCode;
      var item = this.get(e.keypath);
      if(keyCode === 13) {
        // Finish editing
        item.editing = false;
        this.set(e.keypath, item);

        // Update localstorage
        App.Helpers.updateLocalStorage(this.get('todos'));
      }
    },
    updateCompletion: function(e) {
      if(e.context.completed) {
        this.subtract('notCompletedCount');
      } else {
        this.add('notCompletedCount');
      }
    },
    clearCompleted: function() {
      // Get the todos array and loop over
      var todos = this.get('todos');

      for (var i = 0; i < todos.length; i++) {
        if(todos[i].completed) {
          todos.splice(i, 1);
        }
      }

      // Update localstorage
      App.Helpers.updateLocalStorage(this.get('todos'));
    }
  }

});