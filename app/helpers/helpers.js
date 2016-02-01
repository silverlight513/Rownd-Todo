
/* This is where re-usable helpers go that you can
 * use in multiple controllers.
*/
App.Helpers.updateLocalStorage = function(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
};
