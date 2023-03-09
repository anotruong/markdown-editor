const express = require('express');

//middleware that parses request body of incoming requests
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const naviRoutes = require('./routes/navigation-routes');
const sideMenuRoutes = require('./routes/sideMenu-routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/navi', naviRoutes);

app.use('/api/doc', sideMenuRoutes);

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
    app.listen(3000);
  })
  .catch(error => console.log(error));
