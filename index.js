const express = require('express');
const app = express();
const path  = require('path');
const mongoose = require('mongoose');

const Palette = require('./models/palette')

mongoose.connect('mongodb://localhost:27017/mongoPalette', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
      console.log('mongo connection open!')
  })
  .catch(err => {
      console.log('wild mongo error appeared')
      console.log(err)
  })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(6000, () => {
    console.log("APP IS LISTENING ON PORT 6000")
})