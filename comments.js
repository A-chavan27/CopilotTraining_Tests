// create web server
// create express app
// create a router
// create a route
// create a callback function
// send a response

const express = require('express');
const app = express();
const commentsRouter = express.Router();

commentsRouter.get('/', (req, res) => {
  res.send('Comments');
});

app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});