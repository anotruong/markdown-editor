const express = require('express');

//middleware that parses request body of incoming requests
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const naviRoutes = require('./routes/navigation-routes');
const sideMenuRoutes = require('./routes/sideMenu-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
})
// app.use(bodyParser.urlencoded({ extended: true }))

app.use('/navi', naviRoutes);

app.use('/sideMenu', sideMenuRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occured!'});
})

mongoose
  .connect('mongodb+srv://markdown:markdown123@atlascluster.kzp1cx3.mongodb.net/markdown?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5001);
  })
  .catch(error => console.log(error));
