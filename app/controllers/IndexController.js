/*
 * This is a page controller, it should contain the actions/functions related to
 * the current page.
*/
App.createController('index', {

  'view': {
    'template': 'index'
  },

  'controller': function(routeData){
    console.log('This is the index route. Route data below:');
    console.log(routeData);
  },

  'actions': {
    // Template actions go here
  }

});