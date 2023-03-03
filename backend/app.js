const express = require('express');

//middleware that parses request body of incoming requests
const bodyParser = require('body-parser');

const naviRoutes = require('./routes/navigation-routes');
const sideMenuRoutes = require('./routes/sideMenu-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', naviRoutes);

app.use('/', sideMenuRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occured!'});
})

app.listen(3000);