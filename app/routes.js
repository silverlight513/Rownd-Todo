/*
 * routes.js
 * App.createRoute accepts a file and a controller at the moment, although
 * more parameters may be added for the future.
 *
*/

var App = Rownd.start({
    'debug': false,
    'hideInfo': true
});

// An example index route
App.createRoute({
  'controller' : 'index',
  'path' : ''
});

App.createRoute({
  'controller' : 'other',
  'path' : '/other'
});

App.createRoute({
  'controller': 'omg',
  'path' : '/:one/omg'
});

// The 404 handler
App.notFound = function(){
  Rownd.generateTemplate({template: '404'});
  console.log('404 page');
};