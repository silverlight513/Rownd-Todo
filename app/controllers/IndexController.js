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

  'controller': function(){
    var storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    // Update the counter on completion change/creation of and item
    this.observe('todos.*.completed', function(newValue, oldValue) {
      if(!newValue && (oldValue === true || oldValue === undefined)) {
        this.add('notCompletedCount');
      } else if(newValue && !oldValue) {
        this.subtract('notCompletedCount');
      }
    });

    // Update localstorage with latest code
    this.observe('todos.*.*', function() {
      // Get latest todos from model
      var todos = this.get('todos');
      if(JSON.stringify(todos) !== JSON.stringify(storedTodos)){
        // Copy the array
        storedTodos = JSON.parse(JSON.stringify(todos));
        // Update the localstorage
        localStorage.setItem('todos', JSON.stringify(storedTodos));
      }
    });
  },

  'actions': {
    createTodo: function(e, newTask) {
      // Get the keycode to determine if submitting
      var keyCode = e.original.keyCode;
      if(keyCode === 13 && newTask.length > 0) {
        // Create a new todo item and add it to the list
        var newTodo = {value: newTask, editing: false, completed: false};
        this.push('todos', newTodo);

        // Clear the input value
        this.set('newTodo', '');
      }
    },
    destroyTodo: function(e, index) {
      // Remove item at given index
      this.splice('todos', index, 1);
    },
    editTodo: function(e) {
      // Get the value and switch boolean value
      var item = this.get(e.keypath);
      item.editing = !item.editing;
      this.set(e.keypath, item);
    },
    editingValue: function(e) {
      // Get the keycode to determine if submitting
      var keyCode = e.original.keyCode;
      var item = this.get(e.keypath);
      if(keyCode === 13) {
        // Finish editing
        item.editing = false;
        this.set(e.keypath, item);
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
    }
  }

});