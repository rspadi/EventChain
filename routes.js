const routes = require('next-routes')();

routes
  .add('/', '/')
  .add('home', '/:menuItem', '/')
  .add('eventList', '/events/list/:menuItem', '/events/list')
  .add('createEvent', '/events/new/:menuItem', '/events/new')
  .add('/events/list', '/events/list')
  .add('/events/new', '/events/new')
  .add('/events/:address', '/events/show');

module.exports = routes;

//Next-Routes: https://www.npmjs.com/package/next-routes

//.add('home', '/:menuItem', '/')
//.add('eventList', '/events/list/:menuItem', '/events/list')
//.add('createEvent', '/events/new/:menuItem', '/events/new')
