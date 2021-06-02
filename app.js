const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const uplaodRoutes = require('./routes/upload.route');

const app = express();

app.use(cors());

app.listen(8888, () => {
    console.log('File Server is started on port 8888');
})

app.use(uplaodRoutes);

// Handle error
app.use((req, res, next) => {
    setImmediate(() => {
      next(new Error('Error occured'));
    });
  });
  
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });