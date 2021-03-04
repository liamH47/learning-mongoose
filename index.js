const express = require('express');
const app = express();
const path  = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Palette = require('./models/palette')

dotenv.config();
const dbUrl = process.env.DB_URL;
// || 'mongodb://localhost:27017/mongoPalette'
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
      console.log('mongo connection open!')
  })
  .catch(err => {
      console.log('wild mongo error appeared')
      console.log(err)
  })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/palettes', async (req, res) => {
    const palettes = await Palette.find({})
    res.send(palettes)
})

app.listen(3001, () => {
    console.log("APP IS LISTENING ON PORT 6000")
})