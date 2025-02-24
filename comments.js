// Create web server
var express = require('express');
var app = express();
// create a router
var router = express.Router();
// create a comments array
var comments = [];
// add comments to the array
comments.push({name: 'John', message: 'Hello!'});
comments.push({name: 'Mary', message: 'Hi!'});
// create a route for the comments
router.get('/', function(req, res) {
  res.json(comments);
});
// add the route to the express app
app.use('/comments', router);
// start the server
var port = 3000;
app.listen(port);
console.log('Server started at http://localhost:' + port);
// test the server
// open the browser and go to http://localhost:3000/comments
// you should see the comments in JSON format